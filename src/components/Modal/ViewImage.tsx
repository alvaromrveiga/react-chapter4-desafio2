import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image as ChakraImage,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const [imageMaxWidthStyle, setImageMaxWidthStyle] = useState('900px');
  const [imageMaxHeightStyle, setImageMaxHeightStyle] = useState('auto');

  const img = new Image();
  img.src = imgUrl;

  img.onload = () => {
    if (img.width > img.height) {
      setImageMaxWidthStyle('900px');
      setImageMaxHeightStyle('auto');
    } else {
      setImageMaxWidthStyle('auto');
      setImageMaxHeightStyle('600px');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="pGray.900"
          maxWidth={imageMaxWidthStyle}
          maxHeight={imageMaxHeightStyle + 32} // Footer height
          w="max"
          h="max"
        >
          <ModalBody m="0" p="0">
            <ChakraImage
              src={imgUrl}
              maxWidth={imageMaxWidthStyle}
              maxHeight={imageMaxHeightStyle}
            />
          </ModalBody>

          <ModalFooter justifyContent="left" height="32px">
            <Link href={imgUrl} target="_blank">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <></>
    </>
  );
}
