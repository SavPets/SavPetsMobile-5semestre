import { useRouter } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { NAVIGATION_SECTIONS } from '../utils/navigationSections'
import colors from 'tailwindcss/colors'
import { Feather } from '@expo/vector-icons'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { MenuContext } from '../contexts/menu-context'
import { useContextSelector } from 'use-context-selector'

interface NavigationMenuProps {
  isOpen: boolean
}

export function NavigationMenu({ isOpen }: NavigationMenuProps) {
  const router = useRouter()
  const handleChangeMenuVisibility = useContextSelector(
    MenuContext,
    (context) => context.handleChangeMenuVisibility,
  )

  function handleNavigateToScreen(href: string) {
    router.navigate(href)
    handleChangeMenuVisibility()
  }

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      className={`${!isOpen && 'h-0'} absolute top-[76px] z-10 mx-5 mt-8 rounded-lg bg-slate-800 px-5`}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {NAVIGATION_SECTIONS.map((section) => (
          <View key={section.title}>
            <Text className="my-5 text-sm font-semibold uppercase leading-short text-slate-300">
              {section.title}
            </Text>

            <View className="flex-row flex-wrap justify-between">
              {section.data.map((navLink) => (
                <TouchableOpacity
                  key={navLink.text}
                  onPress={() => handleNavigateToScreen(navLink.href)}
                  activeOpacity={0.8}
                  className="mb-8 w-1/2 flex-row gap-3"
                >
                  <View>
                    <Feather
                      name={navLink.icon}
                      color={colors.white}
                      size={24}
                    />
                  </View>

                  <Text className="font-body text-base leading-short text-slate-100">
                    {navLink.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  )
}
