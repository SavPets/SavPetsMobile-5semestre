import { forwardRef } from 'react'
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native'

interface RootProps extends TouchableOpacityProps {
  isFloat?: boolean
}

const Root = forwardRef<TouchableOpacity, RootProps>(function Root(
  { isFloat, ...props },
  ref,
) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      ref={ref}
      {...props}
      style={{ gap: 12 }}
      className={`${isFloat ? 'h-16 w-16' : 'h-[50]'} flex-row items-center justify-center rounded-md bg-sky-400`}
    />
  )
})

function Title(props: TextProps) {
  return (
    <Text
      className="text-center text-sm font-bold leading-short text-slate-950"
      {...props}
    />
  )
}

function Icon(props: ViewProps) {
  return <View {...props} />
}

/* usando o princípio da composição selecionando apenas os itens que serão usados - ícone | texto */
export { Root, Title, Icon }
