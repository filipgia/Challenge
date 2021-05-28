import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

const a = tf.tensor([1,2,3,4]);
const b = tf.sum(a);

