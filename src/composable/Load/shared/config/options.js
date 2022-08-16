import { assign } from 'lodash';
import { LoadSymbolName } from '../context';

export const LoadStateOptions = {
    state: true,
};

export const LoadTipsOptions = {
    tips: '请稍后,正在加载数据...',
    useTips: true,
};

export const LoadIconOptions = {
    icon: '',
    useIcon: true,
};

export const LoadBgcOptions = {
    color: 'rgba(0, 0, 0, 0.8)',
    useColor: true,
};

export const LoadOptions = assign(
    {
        name: LoadSymbolName,
    },
    LoadStateOptions,
    LoadTipsOptions,
    LoadIconOptions,
    LoadBgcOptions
);

export default LoadOptions;
