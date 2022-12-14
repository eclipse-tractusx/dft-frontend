/********************************************************************************
 * Copyright (c) 2021,2022 T-Systems International GmbH
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import AddCircleIcon from '@mui/icons-material/AddCircle';
import HelpIcon from '@mui/icons-material/Help';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const icons = {
  AddCircleIcon,
  HistoryIcon,
  HelpIcon,
  ManageSearchIcon,
  HomeIcon,
};

export interface IntMenuChildren {
  text: string;
  menuIcon?: keyof typeof icons;
  to?: string;
  dataId?: string;
  permissions?: string[];
}

export interface IntMenuItem {
  text: string;
  isHeading?: boolean;
  isExpanded?: boolean;
  childrens?: IntMenuChildren[];
}

export interface IntMenuItemProps {
  item: IntMenuChildren;
  isExpanded: boolean;
}

// menu items
export const MenuItems: IntMenuItem[] = [
  {
    text: 'Provider',
    isHeading: true,
    childrens: [
      // {
      //   text: 'Home',
      //   menuIcon: 'HomeIcon',
      //   to: '/',
      //   dataId: 'homePage',
      // },
      {
        text: 'Create Data',
        menuIcon: 'AddCircleIcon',
        to: '/create-data',
        dataId: 'uploadFileMenu',
        permissions: ['provider_create_contract_offer'],
      },
      {
        text: 'Upload History',
        menuIcon: 'HistoryIcon',
        to: '/upload-history',
        dataId: 'uploadHistoryMenu',
        permissions: ['provider_view_history'],
      },
      {
        text: 'Help',
        menuIcon: 'HelpIcon',
        to: '/help',
        dataId: 'helpMenu',
      },
    ],
  },
  {
    text: 'Consumer',
    isHeading: true,
    childrens: [
      {
        text: 'Consume Data',
        menuIcon: 'ManageSearchIcon',
        to: '/consume-data',
        dataId: 'uploadFileMenu',
        permissions: [
          'consumer_search_connectors',
          'consumer_view_contract_offers',
          'consumer_establish_contract_agreement',
          '',
        ],
      },
      {
        text: 'Contract History',
        menuIcon: 'HistoryIcon',
        to: '/contract-history',
        dataId: 'uploadHistoryMenu',
        permissions: ['consumer_view_contract_agreement'],
      },
    ],
  },
];
