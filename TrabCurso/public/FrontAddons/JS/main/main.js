import { armazenarNome } from './nomes.js';
import { CarProdutos } from './ApiProdutos.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pedidoForm');
    const initialScreen = document.getElementById('initial-screen');
    const mainApp = document.getElementById('main-app');

    console.log('JS conectado');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            // Armazena o nome e verifica se foi bem sucedido
            const nomeArmazenado = armazenarNome();

            if (nomeArmazenado) {
                // Remove a tela inicial com blur
                if (initialScreen) {
                    initialScreen.style.opacity = '0';
                    initialScreen.style.transition = 'opacity 0.5s ease';

                    setTimeout(() => {
                        initialScreen.style.display = 'none';

                        // Mostra o aplicativo principal
                        if (mainApp) {
                            mainApp.style.display = 'flex';
                            mainApp.style.opacity = '0';
                            mainApp.style.transition = 'opacity 0.5s ease';

                            setTimeout(() => {
                                mainApp.style.opacity = '1';
                            }, 50);
                        }

                        // Carrega os produtos
                        CarProdutos();
                    }, 500);
                }
            }
        });
    }
});