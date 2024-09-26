import React from 'react'
import MenuItem from './MenuItem'

const MenuInvitation = () => {
    return (
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-16">
            <MenuItem icon="/images/icon/idea-theme.svg" title="Pilih Tema" href="/my-invitation/create" />
            <MenuItem icon="/images/icon/couple-2.svg" title="Informasi Mempelai" href="/my-invitation/create/informasi-mempelai" />
            <MenuItem icon="/images/icon/calendar-time-and-date.svg" title="Jadwal dan Lokasi Pernikahan" />
        </div>
    )
}

export default MenuInvitation;
