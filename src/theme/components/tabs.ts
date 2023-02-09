import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(['tab'])

const Tabs = helpers.defineMultiStyleConfig({
    baseStyle: {
        tab: {
            fontSize: 'lg',
        }
    }
})