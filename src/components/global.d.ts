/**
 * \file : global.d.ts
 * \brief : Contains custom type informations for import
 */

declare module '*.png'{
    const value: import('react-native').ImageURISource;
    export default value;
}

declare module '*.gif'{
    const value: import('react-native').ImageURISource;
    export default value;
}

type ButtonProps = { title?: string, icon?: { name: string, type: string, }, onPress:Function, 
                    isSelected?: boolean}
