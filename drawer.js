import sharp from 'sharp';
import { BoundaryVector4 } from './boundary-vector';
import { BinaryArray } from './types';
import Noise from 'noisejs';

// Пример использования
const sid = 1;

// const vector4 = { x1: -10, y1: -10, x2: 10, y2: 10 };
// const boundaryVector4 = new BoundaryVector4(-10, 10, 10, 10);
// const boundaryVector4 = new BoundaryVector4(-10, -10, 10, 10);
const boundaryVector4 = new BoundaryVector4(1, 1, -10, -10);
const threshold = 0.5; // Пороговое значение для разделения на 0 и 1
const noiseGenerator = new Noise(sid);
const result = generateBinaryNoise(noiseGenerator, boundaryVector4, threshold);

console.log(result, 'result');

// console.clear();
// console.log(result);

displayBinaryImage(result, boundaryVector4.x2 - boundaryVector4.x1);

const scale = 10;
const width = boundaryVector4.x2 - boundaryVector4.x1;
const height = boundaryVector4.y2 - boundaryVector4.y1;
const image = convertToImage(result, width, height);

// image
sharp(Buffer.from(result), { raw: { width, height, channels: 2 } })
    .resize(width * scale, height * scale)
    .toFile('output3.png', (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Image saved successfully:', info);
        }
    });

function generateBinaryNoise(
    noiseGenerator: Noise,
    boundaryVector4: BoundaryVector4,
    threshold = 0.5,
) {
    const image = [];
    for (let x = boundaryVector4.x1; x < boundaryVector4.x2; x++) {
        for (let y = boundaryVector4.y1; y < boundaryVector4.y2; y++) {
            const value = noiseGenerator.simplex2(x, y);
            console.log(value, 'value');
            image.push(value >= threshold ? 1 : 0);
        }
    }
    return image;
}

function displayBinaryImage(binaryArray: BinaryArray, width: number) {
    for (let i = 0; i < binaryArray.length; i++) {
        // process.stdout.write(binaryArray[i] ? "[#]" : "[ ]");

        let val: number | string = ' ';
        if (binaryArray[i] >= 0.9) {
            val = '*';
        } else if (binaryArray[i] >= 0.8) {
            val = 8;
        } else if (binaryArray[i] >= 0.7) {
            val = 7;
        } else if (binaryArray[i] >= 0.6) {
            val = 6;
        } else if (binaryArray[i] >= 0.5) {
            val = 5;
        } else if (binaryArray[i] >= 0.4) {
            val = 4;
        } else if (binaryArray[i] >= 0.3) {
            val = 3;
        } else if (binaryArray[i] >= 0.2) {
            val = 2;
        } else if (binaryArray[i] >= 0.1) {
            val = 1;
        }

        process.stdout.write(`[${val}]`);
        if ((i + 1) % width === 0) {
            process.stdout.write('\n');
        }
    }
}

function convertToImage(imageData: BinaryArray, width: number, height: number) {
    const imageBuffer = Buffer.from(
        imageData.map((value) => Math.round(value * 255)),
    );
    return sharp(imageBuffer, { raw: { width, height, channels: 1 } });
}
