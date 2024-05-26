import { Input } from '@/src/components/input'
import { ScrollView, Text, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Link } from 'expo-router'

import LogoImg from '@/src/assets/logo.svg'

export default function Register() {
  return (
    <View className="mx-5 flex-1 justify-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 70 }}
      >
        <LogoImg className="self-center" />

        <Text className="my-8 text-center text-xl font-bold leading-short text-white">
          Crie uma conta para acessar
        </Text>

        <View>
          <View className="mb-4 flex-row">
            <Input title="Nome" variant="small" mr={3} />
            <Input title="Sobrenome" variant="small" />
          </View>
          <Input title="Telefone" keyboardType="phone-pad" mb={4} />
          <Input title="Email" keyboardType="email-address" mb={4} />
          <Input title="Senha" secureTextEntry mb={4} />
          <Input title="Confirmar senha" secureTextEntry mb={12} />

          <Button.Root>
            <Button.Icon>
              <Feather name="log-in" size={18} color={colors.slate[900]} />
            </Button.Icon>
            <Button.Title>Cadastrar</Button.Title>
          </Button.Root>
        </View>

        <Link href="/auth/login" asChild className="mt-28 self-center">
          <Button.Root variant="ghost">
            <Button.Title className="font-semibold text-slate-300">
              Já possui algum registro?
              <Text className="text-sky-400"> Entre na sua conta</Text>
            </Button.Title>
          </Button.Root>
        </Link>
      </ScrollView>
    </View>
  )
}
