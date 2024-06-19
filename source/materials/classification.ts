import { IClassification } from "./types";

export const DEFAULT_CLASSIFICATION: IClassification = {
	0:       { visible: true, name: 'never classified'  , color: [0.5,  0.5,  0.5,  1.0] },
	1:       { visible: true, name: 'unclassified'      , color: [0.5,  0.5,  0.5,  1.0] },
	2:       { visible: true, name: 'ground'            , color: [0.63, 0.32, 0.18, 1.0] },
	3:       { visible: true, name: 'low vegetation'    , color: [0.0,  1.0,  0.0,  1.0] },
	4:       { visible: true, name: 'medium vegetation' , color: [0.0,  0.8,  0.0,  1.0] },
	5:       { visible: true, name: 'high vegetation'   , color: [0.0,  0.6,  0.0,  1.0] },
	6:       { visible: true, name: 'building'          , color: [1.0,  0.66, 0.0,  1.0] },
	7:       { visible: true, name: 'low point(noise)'  , color: [1.0,  0.0,  1.0,  1.0] },
	8:       { visible: true, name: 'key-point'         , color: [1.0,  0.0,  0.0,  1.0] },
	9:       { visible: true, name: 'water'             , color: [0.0,  0.0,  1.0,  1.0] },
	12:      { visible: true, name: 'overlap'           , color: [1.0,  1.0,  0.0,  1.0] },
	DEFAULT: { visible: true, name: 'default'           , color: [0.3,  0.6,  0.6,  0.5] },
};

export const RANDOM_CLASSIFICATION: IClassification = {
  DEFAULT: { visible: true, name: 'default' , color: [0.3,  0.6,  0.6,  0.5] },
};

for (let i = 0; i < 256; i++) {
  for (let i = 0; i <= 255; i++) {
    RANDOM_CLASSIFICATION[i] = {
			visible: true,
			name: `class ${i}`,
			color: [Math.random(), Math.random(), Math.random(), 1.0],
		};
  }
}
