import React from 'react';

export default function MainTemplate(props) {
    const { schema, content, onSubmit } = props;

    return (
        <div className="d-flex flex-column w-100" >
            <header className="text-center mb-4">
                <h3>{schema.title}</h3>
                <p style={{fontSize: '15px', fontStyle: 'normal', fontWeight: 'normal'}}>{schema.description}</p>
            </header>

            <form
                onSubmit={onSubmit}
                className="bg-light d-flex flex-column align-items-center justify-content-center p-5 border border-dark border-opacity-25 rounded-4 shadow needs-validation"
                style={{ overflow: 'auto' }}
            >
                {content}
                <button type='submit' className="primaryButton">Submit</button>
            </form>

            <footer className="mt-4 text-center">
                {schema.footerContent}
            </footer>
        </div>
    );
}
