import React, { useEffect } from 'react'
import { Box, Select, ChevronDownIcon, Text, Center } from 'native-base'

interface SelectProps {
  title: string
  options: { label: string; value: string }[]
  value: string | null
}

export default function SelectComponent({
  title,
  options,
  value,
}: SelectProps) {
  const [service, setService] = React.useState('')

  useEffect(() => {
    setService(value || '')
  }, [value])

  return (
    <Center>
      <Box position="relative">
        <Text className="text-base font-semibold leading-short text-slate-300">
          {title}
        </Text>
        <Select
          selectedValue={service}
          minWidth="full"
          dropdownIcon={<ChevronDownIcon size={0} />}
          onValueChange={(itemValue) => setService(itemValue)}
          zIndex={1}
          variant="unstyled"
          className="h-12 rounded-md border border-slate-700 bg-slate-800 px-3 py-3.5 font-body text-sm leading-short text-slate-100"
        >
          {options.map((option, index) => (
            <Select.Item
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Select>
        <ChevronDownIcon
          size="4"
          position="absolute"
          color="white"
          right="4"
          zIndex={2}
          bottom="3.5"
        />
      </Box>
    </Center>
  )
}
