import React from "react";
import {
  VStack,
  Container,
  HStack,
  Text,
  Heading,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  PinInput,
  PinInputField,
  Divider,
  Icon,
  Link,
} from "@chakra-ui/react";
import { MagikButton } from "@qfi/ui";
import { HiExternalLink } from "react-icons/hi";

import { useTranslation, Trans } from 'react-i18next';

export const Settings = () => {
  const [values, setValues] = React.useState(["", "", ""]);
  const { t } = useTranslation();

  return (
    <Container h="full" w="full" overflowY={"scroll"} right="-24px" top={0} left={0} position="absolute">
      <VStack mt={20} spacing={10} h="full" alignItems="flex-start">
        <VStack spacing={6} alignItems="flex-start">
          <Heading size="2xl">{t("How it works?")}</Heading>

        </VStack>
        <VStack spacing={6} alignItems="flex-start">
          <Heading size="md">{t("Polygon Wallet")}</Heading>
          <Text>
            {t("Casting a Ballot requires you to have a wallet on Polygon, MATIC to pay for gas, and a valid ballot key. Voting is anonymous.")}
          </Text>
          <MagikButton />
        </VStack>
        <VStack spacing={2} alignItems="flex-start">
          <Heading size="md">{t("Ballot (MACI) passphrase")}</Heading>
          <Text >
            {t("Each voter gets a pseudo-random MACI key which is used to encrypt and validate your votes. This is the only way to vote in the round, and can be used to change your ballot at any time while the round is active, so keep it safe.")}
          </Text>
        </VStack>

        <VStack spacing={1} alignItems="flex-start">
          <HStack maxW={"container.md"}>
            <PinInput defaultValue="macisk." size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <HStack maxW={"container.md"}>
            <PinInput mask size="xs" type="alphanumeric">
              <PinInputField />
            </PinInput>
          </HStack>
          <Divider></Divider>
          <Button colorScheme="blue" variant="outline" w="full" mt={4}>
            {t("SAVE")}
          </Button>
        </VStack>
        <VStack spacing={2} alignItems="flex-start">
          <Heading size="md">{t("Confused or need help?")}</Heading>
          <Text fontSize="md" >
            {t("You can send us an email at qf@ethlatam.com or join the ETHLatam Telegram group use the #QF hashtag in your post")}
            <Link href='https://t.me/ethlatam' isExternal>
              <Icon as={HiExternalLink} boxSize={4} color="gray.500" />
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};
type SettingsDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const SettingsDrawer = ({ isOpen, onClose }: SettingsDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent
          pt={8}
          h="full"
          maxW={{ sm: "sm", md: "md" }}
          w="full"
          position={"relative"}
          overflow={"hidden"}
          justifyContent="flex-start">
          <DrawerCloseButton zIndex={999} onClick={onClose} />
          <Settings />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
