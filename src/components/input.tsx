import { View, TextInput, Text, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  title: string
  variant?: 'medium' | 'small'
}

export function Input({ title, variant = 'medium', ...props }: InputProps) {
  return (
    <View style={[variant === 'small' && { flex: 1 }, { gap: 2 }]}>
      <Text className="text-base font-semibold leading-short text-slate-300">
        {title}
      </Text>
      <TextInput
        {...props}
        className={`${props.multiline ? 'h-24' : 'h-12'} rounded-md border border-slate-700 bg-slate-800 px-3 py-3.5 font-body text-sm leading-short text-slate-100`}
      />
    </View>
  )
}
