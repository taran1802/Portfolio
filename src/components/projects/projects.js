import React from 'react';
import './projects.css';

const Projects = ({ showProjects }) => {
    return (
        <section className={`projects ${showProjects ? 'active' : ''}`}>
            <h2>PROJECTS</h2>
            <div className="project-list">
                
                <div className="project">
                    <h3>Text Summarizer</h3>
                    <p>This project helps to summarize a large document or article to limited words. The system works by assigning scores to sentences in the document to be summarized and using the highest scoring sentences in the summary. It helps to remove the unwanted data from the document.</p>
                </div>
                <div className="project">
                    <h3>Ensemble classification model for Brain Tumor Detection</h3>
                    <p>This model deals with automated brain tumor detection using a pre-trained model. The main reason for detection of brain tumors is to provide an algorithm that guarantees the presence of a tumor by combining several procedures.</p>
                </div>
                <div className="project">
                    <h3>Smart Stethoscope</h3>
                    <p>Designed to enhance diagnostic capabilities to accurately capture and analyze heartbeat and respiratory sounds in real-time. It detects abnormalities, identifies patterns, and assists in clinical decision-making.</p>
                </div>
                <div className="project">
                    <h3>Hangman Game</h3>
                    <p>Hangman game in Java allows players to guess letters to uncover a secret word. Players have a limited number of attempts to guess the correct letters in the word. The game provides feedback on correct and incorrect guesses, challenging players to deduce the word before exhausting their chances.</p>
                </div>
               
            </div>
        </section>
    );
}

export default Projects;
