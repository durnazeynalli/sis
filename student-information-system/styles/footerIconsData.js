import React from 'react';
import { CalendarIcon } from '../commons/icons/CalendarIcon';
import { BookmarkIcon } from '../commons/icons/BookmarIcon';
import { MenuIcon } from '../commons/icons/MenuIcon';
import { SendFooterIcon } from '../commons/icons/SendFooterIcon';
import { NoteBookIcon } from '../commons/icons/NoteBookIcon';

export const FOOTER_ICONS_DATA = [
	{
		name: 'CallendarStack',
		Icon: () => <CalendarIcon />
	},
	{
		name: 'MaterialsStack',
		Icon: () => <BookmarkIcon  />
	},
	{
		name: 'HomeStack',
		Icon: () => <MenuIcon  />
	},
	{
		name: 'MessagesStack',
		Icon: () => <SendFooterIcon />
	},
	{
		name: 'ClassStack',
		Icon: () => <NoteBookIcon/>
	}
];
