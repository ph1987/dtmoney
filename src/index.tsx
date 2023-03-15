import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({

    models: {
        transaction: Model,
    },
    
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Desenvolvimento de website',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 10500,
                    createdAt: new Date('2023-03-05 08:00:00'),
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 2000,
                    createdAt: new Date('2023-03-05 15:00:00'),
                }
            ]
        })
    },

    routes() {

        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data);
        })
    }
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    /*
    <React.StrictMode>
    <App />
    </React.StrictMode>
    */
    <App />
);
