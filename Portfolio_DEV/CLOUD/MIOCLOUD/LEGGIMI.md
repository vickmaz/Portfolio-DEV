Un piccolo progetto cloud che ho realizzato con infrastruttura Linode/Akamai

Le varie immagini rappresentano il modo in cui ho configurato la macchina. Il cloud non è più attivo.

*Apache_Webserver*
La Macchina Virtuale è dotata di un webserver Apache che risiede su var/www/html

*Firewall*
La macchina è stata dotata di un firewall che accetta le connessioni dal mio PC, droppando le connessioni provenienti da indirizzi IP non riconosciuti

*Hardening_SSH*
La porta di default per le connessioni SSH è stata cambiata da 22 a 9995 per evitare attacchi di Bot o intrusioni da parte di utenti malintenzionati

*Home_miocloud*
Schermata di Home della piattaforma miocloud con nome dell'utente attualmente in uso e dell'host

*Miocloud_DB* 
Sulla maacchina è stato installato un Database utenti con una query di esempio

*Node_balancers*
Il cloud è stato dotato di due Node Balancers per diminuire la latenza e aumentare le performance della rete