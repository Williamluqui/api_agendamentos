-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Admin_usuario_key`(`usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamento` (
    `id_pagamento` INTEGER NOT NULL AUTO_INCREMENT,
    `data_pagamento` DATETIME(3) NOT NULL,
    `metodo_pagamento` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_pagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cabelereiro` (
    `id_cabelereiro` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT false,
    `tipo` VARCHAR(191) NOT NULL DEFAULT 'cabelereiro',
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pagamentos_id_pagamento` INTEGER NOT NULL,

    UNIQUE INDEX `Cabelereiro_email_key`(`email`),
    PRIMARY KEY (`id_cabelereiro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL DEFAULT 'cliente',
    `avatar` VARCHAR(191) NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agendamento` (
    `id_agendamento` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `hora` DATETIME(3) NOT NULL,
    `tipo_servico` VARCHAR(191) NOT NULL,
    `usuarios_id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`id_agendamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servico` (
    `id_servicos` INTEGER NOT NULL AUTO_INCREMENT,
    `corte_cabelo` VARCHAR(191) NULL DEFAULT 'cabelo',
    `corte_barba` VARCHAR(191) NULL DEFAULT 'barba',
    `corte_cabelo_barba` VARCHAR(191) NULL DEFAULT 'cabelo e barba',
    `agendamentos_id_agendamento` INTEGER NOT NULL,

    PRIMARY KEY (`id_servicos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CabelereiroUsuario` (
    `cabelereiros_id_cabelereiro` INTEGER NOT NULL,
    `usuarios_id_usuario` INTEGER NOT NULL,

    PRIMARY KEY (`cabelereiros_id_cabelereiro`, `usuarios_id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cabelereiro` ADD CONSTRAINT `Cabelereiro_pagamentos_id_pagamento_fkey` FOREIGN KEY (`pagamentos_id_pagamento`) REFERENCES `Pagamento`(`id_pagamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamento` ADD CONSTRAINT `Agendamento_usuarios_id_usuario_fkey` FOREIGN KEY (`usuarios_id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servico` ADD CONSTRAINT `Servico_agendamentos_id_agendamento_fkey` FOREIGN KEY (`agendamentos_id_agendamento`) REFERENCES `Agendamento`(`id_agendamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CabelereiroUsuario` ADD CONSTRAINT `CabelereiroUsuario_cabelereiros_id_cabelereiro_fkey` FOREIGN KEY (`cabelereiros_id_cabelereiro`) REFERENCES `Cabelereiro`(`id_cabelereiro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CabelereiroUsuario` ADD CONSTRAINT `CabelereiroUsuario_usuarios_id_usuario_fkey` FOREIGN KEY (`usuarios_id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
