import {HttpHeaders, HttpResponse} from '@angular/common/http';

export interface JtwResponsei {
        id: string;
        email: string;
        name_user: string;
        m_lastname: string;
        f_lastname: string;
        p_contacts: number;
        address: string;
        rut_user: string;
        jti: string;
        role: string;
}
