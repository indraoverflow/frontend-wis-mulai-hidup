import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Button } from '../ui/button';

interface SubmitButtonProps {
    isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
    return (
        <Button type="submit" disabled={isSubmitting} className="btn">
            {isSubmitting ? (
                <>
                    <FaSpinner className="w-4 h-4 mr-2 animate-spin" /> Loading...
                </>
            ) : (
                'Simpan'
            )}
        </Button>
    );
};

export default SubmitButton;