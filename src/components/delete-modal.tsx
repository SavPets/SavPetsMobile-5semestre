/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack, Box, Modal, Pressable, Text } from 'native-base'
import React, { useState } from 'react'
import * as Button from '@/src/components/button'

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

  // const onDelete = (item: any) => {}

  const handleDelete = (item: any) => {
    onDelete(item)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content bg="#1e293b" className="">
        <VStack className="pb-8 pl-6 pr-6 pt-8 ">
          <Box>
            <Text
              color="#FFFFFF"
              className="mt-3  pb-7 text-center align-top text-lg font-semibold leading-short"
            >
              Deseja realmente excluir {itemName}?{' '}
            </Text>
          </Box>
          <Box className=" flex-row ">
            <Button.Root
              // variant cancelar
              variant="cancel"
              onPress={onClose}
              className="  "
            >
              <Button.Title className="w-32 text-slate-300">
                Cancelar
              </Button.Title>
            </Button.Root>

            <Button.Root
              variant="delete"
              onPress={handleDelete}
              className="w-32"
            >
              <Button.Title className=" w-32 ">Sim, excluir</Button.Title>
            </Button.Root>
          </Box>
        </VStack>
      </Modal.Content>
    </Modal>
  )
}
export default DeleteModal
