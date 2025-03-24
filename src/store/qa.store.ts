import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QAState = {
  resData: any; // Can be an object, array, or string
  saveQAData: (data: any) => void;
};

export const useQAStore = create<QAState>()(
  persist(
    (set) => ({
      resData: null, // Initial state
      saveQAData: (data) => set({ resData: data }), // Update store
    }),
    { name: 'qa-storage' } // Persist in localStorage
  )
);

type QuestionState = {
  resData: any;
  saveQuestion: (data: any) => void;
};

export const usePreQuestion = create<QuestionState>()(
  persist(
    (set) => ({
      resData: [],
      saveQuestion: (data) => set({ resData: data }),
    }),
    { name: 'prequestion-storage' }
  )
);
