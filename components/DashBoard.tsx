import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { Settings } from 'tabler-icons-react'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/group"
          >
            Group
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/multi-select"
          >
            Multi Select
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/fetch-api"
          >
            Data loader
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/dialog"
          >
            Dialog
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/modal"
          >
            Modal
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/card"
          >
            Card
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/table"
          >
            Table
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component="a"
            href="/crypto"
          >
            Crypto
          </Menu.Item>
        </Menu>
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
