'use client';

import { useEffect, useRef } from 'react';
// @mui
import Container from '@mui/material/Container';
import { Box, Stack, Typography } from '@mui/material';
// _mock
// import { _questions, } from 'src/_mock';
import { useQAStore } from 'src/store/qa.store';
// components
import AppHeader from 'src/components/app-header';
//
import { MatchBox, DetaultQuestionBox } from '../components';

// ----------------------------------------------------------------------

type Props = {
    id: string;
};

type chatType = {
    type: string;
    text: string;
}

export default function SavedAnswersSendView({ id }: Props) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const savedQA = useQAStore((state) => state.resData);
    const QA: chatType[] = savedQA[Number(id)].messages;


    // ✅ Scroll down function
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // ✅ Scroll down when messages change
    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <Container maxWidth="lg">
            <AppHeader title="Saved Questions and awnsers" />

            <Stack
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: 1, px: { xs: 0, md: 10 } }}
            >
                <Stack
                    spacing={3}
                    alignItems="flex-end"
                    sx={{
                        mt: 4,
                        width: 1,
                    }}
                >

                    {QA.map((item, index) => (
                        <>
                            {item.type === 'answer' ? (
                                <DetaultQuestionBox action>
                                    <Typography variant="inherit" sx={{ fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: item.text.replace(/[*#]/g, "").replace(/\n/g, "<br />") }} />

                                </DetaultQuestionBox>
                            ) : (
                                <MatchBox>
                                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                                        {item.text}
                                    </Typography>
                                </MatchBox>
                            )}
                        </>
                    ))}

                    <Box ref={messagesEndRef} />
                </Stack>
            </Stack>
        </Container>
    );
}
