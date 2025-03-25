'use client';

// @mui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import Container from '@mui/material/Container';

import { useEffect, useRef, useState } from 'react';
// components
import AppTitle from 'src/components/app-title';
import { ConfirmDialog } from 'src/components/custom-dialog';
import Iconify from 'src/components/iconify';
import { TableEmptyRows } from 'src/components/table';
import { deletePrequestion, editPreQuestion, getPreQuestion, savePreQuestion } from 'src/helper/api_steam_helper';
import { usePreQuestion } from 'src/store/qa.store';
//
interface QuestionType {
    id: string,
    question: string
}
// ----------------------------------------------------------------------

export default function PreConfiguredQuestion() {
    const savedQuestion = usePreQuestion((state) => state.saveQuestion);
    const saveQuestionRef = useRef(savedQuestion);
    const preQuestions = usePreQuestion((state) => state.resData);
    const hasRun = useRef(false);
    useEffect(() => {
        if (hasRun.current) return; // Prevents second execution
        hasRun.current = true;
        const fetchQuestions = async () => {
            try {
                // await savePreQuestion({ data })
                const res: any = await getPreQuestion({});
                if (res) {
                    saveQuestionRef.current(res.data.results); // ✅ Correctly update Zustand state
                }
            } catch (error) {
                console.error("Error fetching QA:", error);
            }
        };

        fetchQuestions(); // ✅ Call the async function inside useEffect
    }, []); // ✅ Added dependencies

    const [question, setQuestion] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState<boolean>(false);
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [questionId, setQuestionId] = useState<string>("");
    const onClose = () => {
        setOpen(false)
        setQuestion("")
    }

    const handleEditPreQuestion = async (id: string, questionText: string) => {
        try {
            const data = { id, question: questionText }
            const res = await editPreQuestion({ data });
            if (res) {
                savedQuestion(res.data.results); // ✅ Correctly update Zustand state
            }
            onClose();
        } catch (error) {
            console.error("error", error)
        }
    }

    const handleDeletePreQuestion = async (id: string) => {
        try {
            const data = { id };
            const res = await deletePrequestion({ data });
            if (res) {
                savedQuestion(res.data.results); // ✅ Correctly update Zustand state
            }
            setConfirmOpen(false);
        } catch (error) {
            console.error("error", error)
        }
    }

    const handleSavePrequestion = async (questionText: string) => {
        try {
            const data = { question: questionText };
            const res = await savePreQuestion({ data });
            if (res) {
                savedQuestion(res.data.results); // ✅ Correctly update Zustand state
            }
            onClose();
        } catch (error) {
            console.error("error", error)
        }
    }

    const setDefaultValue = (id: string, questionText: string) => {
        setQuestionId(id);
        setQuestion(questionText);
    };

    const handleQuestion = () => {
        // setLoading(true);
        if (state) {
            handleEditPreQuestion(questionId, question)
        } else {
            handleSavePrequestion(question);
        }
        // setLoading(false);
    }

    return (
        <Container maxWidth="lg">
            <AppTitle title="Pre Configured Questions" />
            <Stack
                direction="row"
                sx={{ pb: 2, justifyContent: "flex-end" }}
            >
                <Stack sx={{ width: "150px" }}>
                    <Button variant="contained" onClick={() => { setOpen(true); setState(false) }}>New Question</Button>
                </Stack>
            </Stack>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell>Order</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {preQuestions && (
                        preQuestions?.map((item: QuestionType, index: number) =>
                        (
                            <TableRow key={index}>
                                <TableCell>{item.question}</TableCell>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => { setDefaultValue(item?.id, item?.question); setState(true); setOpen(true) }}>
                                        <Iconify icon='eva:edit-outline' />
                                    </IconButton>

                                    <IconButton onClick={() => { setConfirmOpen(true); setQuestionId(item.id) }}>
                                        <Iconify icon='eva:trash-outline' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                        )
                    )}
                </TableBody>
            </Table>

            <Dialog
                fullWidth
                maxWidth={false}
                open={open}
                onClose={onClose}
                PaperProps={{
                    sx: { maxWidth: 480 },
                }}
            >
                <DialogTitle sx={{ pb: 2 }}>Save Pre Configured Question</DialogTitle>
                <DialogContent sx={{ typography: 'body2' }}>
                    <Stack sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, }}>
                        <TextField
                            id="question"
                            variant="outlined"
                            fullWidth
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={handleQuestion}
                    >
                        {/* {loading ? <CircularProgress size={24} /> : state ? "Edit" : "Save"} */}
                        {state ? "Edit" : "Save"}
                    </Button>
                    <Button variant="outlined" color="inherit" onClick={onClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <ConfirmDialog
                title="title"
                content='Do you want to delete this message?'
                action={
                    <Button variant="outlined" color="inherit" onClick={() => handleDeletePreQuestion(questionId)}>
                        Yes
                    </Button>
                }
                open={confirmOpen}
                onClose={() => { setConfirmOpen(false) }}
            />
        </Container >
    );
}
