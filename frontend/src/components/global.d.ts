/**
 * \file : global.d.ts
 * \brief : Contains custom type informations for import
 */

declare module '*.png'{
    const value: import('react-native').ImageURISource;
    export default value;
}