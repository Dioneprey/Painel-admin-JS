import AdminJS from 'adminjs'

import User from '../models/user'

export default {
    resource: User,
    options: {
        
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position: 2,
                isVisible: { list: true, filter: false, show: true, edit: false },
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true,
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { value: 'admin', label: 'Administrador'},
                    { value: 'manager', label: 'Gerente'},
                    { value: 'developer', label: 'Desenvolvedor'},
                ]
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { value: 'active', label: 'Ativo'},
                    { value: 'archived', label: 'Arquivado'}                    
                ]
            },
            created_at: {
                position: 7,
                isVisible: { list: false, filter: true, show: false, edit: false }
            },
            updated_at: {
                position: 8,
                isVisible: { list: false, filter: true, show: false, edit: false }
            },            
            password: {
                isVisible: false
            },
            password_hash: {
                isVisible: false
            }
        }
    }
}