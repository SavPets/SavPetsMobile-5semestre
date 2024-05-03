/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { VStack, Modal, Pressable, Text, HStack, View, Box } from 'native-base'
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
    <Modal isOpen={isOpen} onClose={onClose} style={{ width: 450 }}>
      <Modal.Content bg="#1e293b" className="mr-8">
        <VStack className="px-8 py-8">
          <Box>
            <Text
              color="#FFFFFF"
              className="mb-7 mt-3 text-center align-top text-lg font-semibold leading-short"
            >
              Deseja realmente excluir {itemName}?{' '}
            </Text>
          </Box>
          <HStack
            style={{
              gap: 6,
              justifyContent: 'center',
            }}
          >
            <Button.Root
              // variant cancelar
              variant="cancel"
              onPress={onClose}
            >
              <Button.Title className=" px-10 text-slate-300">
                Cancelar
              </Button.Title>
            </Button.Root>
            <Button.Root variant="delete" onPress={handleDelete}>
              <Button.Title className="px-8">Sim, excluir</Button.Title>
            </Button.Root>
          </HStack>
        </VStack>
      </Modal.Content>
    </Modal>
  )
}
export default DeleteModal
