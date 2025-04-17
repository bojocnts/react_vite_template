import React from 'react';
import '../css/loadingSpinner.css';
import { ILoadingSpinnerProps } from '../interfaces/ILoadingSpinnerProps';

export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ loadingText }) => (
    <div className="loading-spinner">
        <div className="spinner mar-bot-10"></div>
        <div className='loading-text'>{loadingText}</div>
    </div>
);