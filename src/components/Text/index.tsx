import React, {useRef, useEffect} from 'react'
import { useField } from '@unform/core'
import {TextProps, Text} from 'react-native'

import {Container, TextComponent, TouchButton} from './styles'

interface TextValueReference {
    value :string;
}

interface TextProp extends TextProps {
    name: string;
    valueText: string;
}

const TextComp: React.FC<TextProp> = (
    {name, children, valueText, ...rest}, 
) => {
        const textElementRef = useRef<any>(null);
        const {registerField, defaultValue = '', fieldName, error} = useField(name);
        const textValueRef = useRef<TextValueReference>({value: defaultValue});

        useEffect(() => {
            registerField<string>({
                name: fieldName,
                ref: textValueRef.current,
                path: 'value',
                setValue(ref: any, value){
                    textValueRef.current.value = value;
                    textElementRef.current.setNativeProps({text: value});
                },
                clearValue(){
                    textValueRef.current.value = '';
                    textElementRef.current.clear();
                }
            })
        },[fieldName, registerField])

        return (
            <Container>
                <TouchButton>
                    <TextComponent
                    onPress={() => textValueRef.current.value = valueText}
                    {...rest}
                    >
                        {children}
                    </TextComponent>
                </TouchButton>
            </Container>
        )
}

export default TextComp;