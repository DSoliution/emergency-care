"use client"
import { TextInput, PasswordInput, createTheme, Button } from "@mantine/core";

const theme = createTheme({
    components:{
        TextInput:TextInput.extend({
            classNames:{
                input:"rounded-lg h-[40px]",
            }
        }),
        PasswordInput:PasswordInput.extend({
            classNames:{
                input:"rounded-lg h-[40px]",
            }
        }),
        Button:Button.extend({
            classNames:{
                root:"rounded-lg h-[40px]",
                label:"font-medium"
            }
        }),
    },
});

export default theme;
