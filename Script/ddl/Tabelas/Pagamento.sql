CREATE TABLE Pagamento (
    pagamento_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    assinatura_id INT NOT NULL,
    valor DECIMAL(8,2) NOT NULL,
    data_pagamento SMALLDATETIME NOT NULL,
    metodo VARCHAR(10) DEFAULT 'Pix',
    status BIT NOT NULL DEFAULT 1,
    referencia VARCHAR(80),
    FOREIGN KEY (assinatura_id) REFERENCES Assinatura(assinatura_id)
);
