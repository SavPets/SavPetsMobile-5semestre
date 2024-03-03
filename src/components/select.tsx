import React, { useState } from 'react'
import { NativeBaseProvider, Box, Pressable, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import DropdownModal from './modal'

interface SelectProps {
  title: string
  options: { label: string; value: string }[]
}

const Select = ({ title, options }: SelectProps) => {
  const [service, setService] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <NativeBaseProvider>
      <Box className=" flex-cow mb-4 h-16">
        <Text className="text-base font-semibold leading-short text-slate-300">
          {title}
        </Text>
        <Pressable onPress={toggleDropdown}>
          <Box
            className=" h-12 rounded-md border border-slate-700 bg-slate-800 font-body text-sm leading-short text-slate-300"
            borderWidth={1}
            p={2}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text className="text-slate-100">{service}</Text>
            <Ionicons name="chevron-down" size={20} color="gray" />
          </Box>
        </Pressable>

        <DropdownModal
          options={options}
          onValueChange={(value) => setService(value)}
          isOpen={isDropdownOpen}
          onClose={toggleDropdown}
        />
      </Box>
    </NativeBaseProvider>
  )
}

export default Select
