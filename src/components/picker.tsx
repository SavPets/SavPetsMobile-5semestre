/* eslint-disable @typescript-eslint/no-unused-vars */
import { Picker } from '@react-native-picker/picker'
import React, { useRef, useState } from 'react'
import { View, Text, TextInputProps } from 'react-native'

interface PickerProps {
  title: string
  options: { label: string; value: string }[]
}

export default function PickerComponent({
  title,
  options,
  ...props
}: PickerProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    options[0]?.value || null,
  )

  return (
    <View className="gap-0.5">
      <Text className="text-base font-semibold leading-short text-slate-300">
        {title}
      </Text>

      <View className=" rounded-md border border-slate-700 bg-slate-800 font-body text-sm leading-short">
        <Picker
          style={{ color: '#cbd5e1', backgroundColor: '#1e293b' }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          enabled={true}
          dropdownIconColor="#cbd5e1"
          dropdownIconRippleColor="#cbd5e1"
          prompt="Selecione uma opção"
          // itemStyle
        >
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              label={option.label}
              value={option.value}
              color="#CBD5E1"
              fontFamily="font-body"
              style={{ backgroundColor: '#1e293b' }}
            />
          ))}
        </Picker>
      </View>
    </View>
  )
}
