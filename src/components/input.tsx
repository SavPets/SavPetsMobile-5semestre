import { FormControl, Input as IInput, IInputProps } from 'native-base'
import { View, Text } from 'react-native'
import colors from 'tailwindcss/colors'

type InputProps = IInputProps & {
  title: string
  variant?: 'medium' | 'small'
  errorMessage?: string | null
}

export function Input({
  title,
  errorMessage = null,
  variant = 'medium',
  isInvalid,
  defaultValue,
  ...props
}: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <View style={[variant === 'small' && { flex: 1 }, { gap: 2 }]}>
      <Text className="text-base font-semibold leading-short text-slate-300">
        {title}
      </Text>

      <FormControl isInvalid={invalid}>
        <IInput
          h={props.multiline ? 24 : 12}
          rounded={6}
          borderColor={colors.slate[700]}
          borderWidth={1}
          bg={colors.slate[800]}
          px={3}
          py={3.5}
          fontFamily="Nunito_400Regular"
          fontSize={14}
          color={colors.slate[100]}
          _focus={{
            borderColor: colors.slate[400],
          }}
          _invalid={{
            borderColor: colors.red[500],
            bg: 'rgba(239, 67, 67, 0.1)',
          }}
          {...props}
        />
        <FormControl.ErrorMessage fontFamily="Nunito_400Regular">
          {errorMessage}
        </FormControl.ErrorMessage>
      </FormControl>
    </View>
  )
}
