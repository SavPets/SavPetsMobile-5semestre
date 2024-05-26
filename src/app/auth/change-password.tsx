import { Input } from '@/src/components/input'
import { Text, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Link } from 'expo-router'

import LogoImg from '@/src/assets/logo.svg'

export default function ChangePassword() {
  return (
    <View className="mx-5 flex-1 justify-center">
      <LogoImg className="self-center" />

      <Text className="my-8 text-center text-xl font-bold leading-short text-white">
        Altere sua senha para entrar
      </Text>

      <View>
        <Input title="Email" keyboardType="email-address" className="mb-4" />
        <Input title="Senha" secureTextEntry className="mb-4" />
        <Input title="Confirmar senha" secureTextEntry className="mb-12" />

        <Button.Root>
          <Button.Icon>
            <Feather name="log-in" size={18} color={colors.slate[900]} />
          </Button.Icon>
          <Button.Title>Atualizar</Button.Title>
        </Button.Root>

        <Link href="/auth/login" asChild className="mt-3 self-center">
          <Button.Root variant="ghost" className="mt-3">
            <Button.Title className="text-slate-300">
              Voltar para acessar a conta
            </Button.Title>
          </Button.Root>
        </Link>
      </View>

      <Link href="/auth/register" asChild className="mt-28 self-center">
        <Button.Root variant="ghost">
          <Button.Title className="font-semibold text-slate-300">
            Não tem nenhuma conta?
            <Text className="text-sky-400"> Cadastre-se</Text>
          </Button.Title>
        </Button.Root>
      </Link>
    </View>
  )
}
