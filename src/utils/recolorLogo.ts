import { BRAND_BLUE } from '../styles/brand';

type HSL = {
  h: number;
  s: number;
  l: number;
};

const brandHsl = hexToHsl(BRAND_BLUE);

/**
 * Recolors the green glyphs of the provided logo to match the brand blue.
 * The thresholds target hues between 130° and 170° (greens) with medium saturation and lightness.
 * If you need to tweak the tone further, adjust the hue/saturation/lightness limits below.
 */
export const recolorLogoToBrandBlue = async (src: string): Promise<string> => {
  if (typeof document === 'undefined') {
    return src;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';

    img.onload = () => {
      try {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height);
        const { data } = imageData;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const alpha = data[i + 3];

          if (alpha === 0) {
            continue;
          }

          const { h, s, l } = rgbToHsl(r, g, b);

          // Greens / turquoise hues typically sit between 130° and 170°.
          if (h >= 130 && h <= 170 && s > 0.25 && l >= 0.2 && l <= 0.85) {
            const adjustedS = clamp((s + brandHsl.s) / 2, 0, 1);
            const adjustedL = clamp((l + brandHsl.l) / 2, 0, 1);
            const { r: nr, g: ng, b: nb } = hslToRgb(brandHsl.h, adjustedS, adjustedL);
            data[i] = nr;
            data[i + 1] = ng;
            data[i + 2] = nb;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL());
      } catch (error) {
        reject(error instanceof Error ? error : new Error('Unexpected error recoloring logo'));
      }
    };

    img.onerror = () => reject(new Error('Unable to load logo image for recoloring'));
    img.src = src;
  });
};

function rgbToHsl(r: number, g: number, b: number): HSL {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  let s = 0;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) * 60;
        break;
      case gNorm:
        h = ((bNorm - rNorm) / delta + 2) * 60;
        break;
      default:
        h = ((rNorm - gNorm) / delta + 4) * 60;
        break;
    }
  }

  return { h, s, l };
}

function hslToRgb(hDeg: number, s: number, l: number): { r: number; g: number; b: number } {
  const h = ((hDeg % 360) + 360) % 360 / 360;

  if (s === 0) {
    const value = Math.round(l * 255);
    return { r: value, g: value, b: value };
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function hue2rgb(p: number, q: number, t: number): number {
  let temp = t;
  if (temp < 0) temp += 1;
  if (temp > 1) temp -= 1;
  if (temp < 1 / 6) return p + (q - p) * 6 * temp;
  if (temp < 1 / 2) return q;
  if (temp < 2 / 3) return p + (q - p) * (2 / 3 - temp) * 6;
  return p;
}

function hexToHsl(hex: string): HSL {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return rgbToHsl(r, g, b);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
