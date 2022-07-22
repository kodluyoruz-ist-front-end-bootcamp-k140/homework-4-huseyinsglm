import React from 'react';
import { ChevronRight, ChevronLeft } from 'tabler-icons-react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

export function User() {
    const theme = useMantineTheme();

    return (
        <Box
            sx={{
                paddingTop: theme.spacing.sm,
                borderTop: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                        src="https://lh3.googleusercontent.com/ogw/AOh-ky3UXmhWcruQxzUDMLkD2qYczf_qH_AEaMbtm0BcQQ=s64-c-mo"
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            Hüseyin Sağlam
                        </Text>
                        <Text color="dimmed" size="xs">
                            huseyinnsaglamm@gmail.com
                        </Text>
                    </Box>

                    {theme.dir === 'ltr' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </Group>
            </UnstyledButton>
        </Box>
    );
}