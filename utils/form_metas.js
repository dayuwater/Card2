import React from 'react'
import { green, light, dark, white, primaryText, secondaryText, orange } from './colors'


// Scaffold for new card form
export function newCard(metric) {
    const info = {
        question: {
            title: "Question",
            prompt: "Enter your question here",
            type: "text"

        },
        answer: {
            title: "Answer",
            prompt: "Enter your answer here",
            type: "text"

        },
        category: {
            title: "Category",
            prompt: "What kind of knowledge needed to answer your question?",
            type: "text"

        },
        difficulty: {
            title : "Difficulty Level",
            type: "stepper",
            step: 1,
            unit: "n/a",
            max: 10,
            min: 1
            

        },
        timeLimit:{
            title: "Suggested Time Limit",
            type: "stepper",
            unit: "seconds",
            step: 10,
            max: 300,
            min: 30
        }
    }

    return typeof metric === 'undefined'
        ? info
        : info[metric]
}

// Scaffold for new deck form
export function newDeck(metric) {
    const info = {
        name: {
            title: "Name",
            prompt: "Enter your deck name here",
            type: "text"

        },
        description: {
            title: "Description",
            prompt: "Enter your deck description here",
            type: "text"

        },
        category: {
            title: "Category",
            prompt: "What kind of knowledge needed to answer your question?",
            type: "text"

        },
        passingScore: {
            title : "Passing Score",
            type: "slider",
            step: 10,
            unit: "%",
            max: 100,
            min: 5
            

        },
        timeLimit:{
            title: "Suggested Time Limit",
            type: "slider",
            unit: "minites",
            step: 5,
            max: 30,
            min: 5
        }
    }

    return typeof metric === 'undefined'
        ? info
        : info[metric]
}