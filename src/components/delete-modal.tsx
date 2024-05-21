/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Modal, View, Text, TouchableOpacity, StatusBar } from 'react-native'
import * as Button from '@/src/components/button'
import colors from 'tailwindcss/colors'
import 'tailwindcss/tailwind.css'

interface DeleteModalProps {
  isVisible: boolean
  onClose: () => void
  isOpen: boolean
  onDelete: (item: any) => void
  item: any
  itemName: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isVisible,
  onClose,
  isOpen,
  onDelete,
  item,
  itemName,
}) => {
  if (!isVisible) {
    return null
  }

  const handleDelete = (item: any) => {
    onDelete(item)
    onClose()
  }

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
      animationType="slide"
    >
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.5)"
        barStyle="light-content"
      />
      <View className="flex-1 items-center justify-center">
        <View className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50" />
        <View className="mx-5 items-center rounded-lg bg-gray-800">
          <Text className="mb-7 px-11 pt-8 text-center text-lg font-semibold text-white">
            Deseja realmente excluir {itemName}?
          </Text>

          <View
            className=" flex-row justify-center px-7 pb-8"
            style={{ gap: 12 }}
          >
            <Button.Root variant="cancel" onPress={onClose}>
              <Button.Title className="px-10 py-4 font-bold text-slate-300">
                Cancelar
              </Button.Title>
            </Button.Root>

            <Button.Root variant="delete" onPress={handleDelete}>
              <Button.Title className="px-8 py-4 font-bold text-slate-950">
                Sim, excluir
              </Button.Title>
            </Button.Root>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal
