import { Tab, TabGroup, TabList, TabPanel, TabPanels, Dialog } from '@headlessui/react';
import SquareCheckbox from './components/checkbox';
import { useState } from 'react';

const categories = [
  {
    name: 'Tất cả',
    posts: [
      {
        id: 1,
        title: 'Giảm 15% tối đa 50k đơn từ 1k',
        date: '31/07/2024',
        details: 'thông tin giảm',
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
        details: 'Guidance on what to do after buying coffee.',
      },
    ],
  },
  {
    name: 'Vận chuyển',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
        details: 'Exploring the impact of technology on coffee.',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
        details: 'A look at innovations in the coffee industry.',
      },
    ],
  },
  {
    name: 'Ưu đãi khác',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
        details: 'Answers to common questions about coffee.',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
        details: 'Examples of poor advice related to coffee.',
      },
    ],
  },
];

export default function Example() {
  const [checkedPosts, setCheckedPosts] = useState({});
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckboxChange = (postId) => {
    setCheckedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const openDialog = (post) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedPost(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className={({ selected }) =>
                  `relative py-1 px-3 text-sm font-semibold ${
                    selected
                      ? ' font-bold underline bg-white/10' // Khi chọn, thêm gạch line dưới, chữ in đậm, và nền màu nhạt
                      : ' bg-transparent' // Khi không chọn, chỉ có màu chữ trắng và nền trong suốt
                  } focus:outline-none hover:bg-white/5`
                }
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3 border border-white">
                <ul className="space-y-4">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className={`relative flex flex-col`}
                    >
                      <div className="flex items-center">
                        <SquareCheckbox
                          checked={checkedPosts[post.id] || false}
                          onChange={() => handleCheckboxChange(post.id)}
                          className="mr-3"
                        />
                        <div
                          className={`flex-1 rounded-xl p-3 border ${
                            checkedPosts[post.id]
                              ? 'bg-green-100 border-green-500'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          <a href="#" className="font-semibold text-white">
                            {post.title}<button
                          onClick={() => openDialog(post)}
                          className="ml-3 text-white focus:outline-none"
                          aria-label="More details"
                        >
                          !
                        </button>
                          </a>
                          <p className="text-white/50 mt-1">HSD: {post.date}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        <Dialog open={isDialogOpen} onClose={closeDialog} className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <Dialog.Title className="text-lg font-bold">
              {"Chi tiết voucher!"}
            </Dialog.Title>
              <Dialog.Description className="mt-2">
                {selectedPost?.details}
              </Dialog.Description>
              <button
                onClick={closeDialog}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
