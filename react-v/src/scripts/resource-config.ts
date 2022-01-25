import { Resources } from "../Enums/enums";

const resourceConfig = [
    {key: Resources.Wheat, value: 3},
    {key: Resources.Wood, value: 3},
    {key: Resources.Brick, value: 3},
    {key: Resources.Stone, value: 3},
    {key: Resources.Glass, value: 3},
];

export const applyResourceConfig = () => {
    var config : string[] = [];
    resourceConfig.forEach((item) => {
        config = config.concat(Array(item.value).fill(Resources[item.key]));
    });
    return config;
}