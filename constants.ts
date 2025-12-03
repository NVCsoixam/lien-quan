
import { Hero, NewsItem, HeroStat } from './types';

export const ASSETS = {
    heroBanner: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSFeZ3tq2vFGOnni0DJd384fFmn16YjfdeyLkm_q_l8l3I5xGIo5_iTQm2igC2WPBZhoorJSZLLelYZGZsP1DFE6VUE9_5TSZAz7jHOsrmn3Ynih6lHi1MkTPZCcWUOTmoBz1i0qju7tbxCqv5YR-9IZRwoNbJbGay77Vr-U7APfGgPh5Cvzn3a12e8fnQDZLTxT12_JYUJ8sTrR34-agcw6bjkXysqgKI-4NiP0Qi7ARgqvbaQbDNVdRtHl6r9UGgbFAeVzFNJxrb",
    newsBanner: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYgPLpA-3lJCHFCeEfGywm5ipv0tKAu7WICKVVJv9KUEquQIiHlQ7N65n154a62lOSjcPzcmDK2XJD6BnmB-BITzO0F6yLzyfpULGVDjLeKJ5HoUD5eRyhdI8xPenOf-1_1cQP1ZQ4HrdXJ1otROAUjWppgArA-7XJRanFxLZJjUABm_0W0Q4dCrkQneVtkj0bg7SdupwLs4CeB0e7JW0esPbLLXXa4IVoIHlImZ1Ds99EhmakBCGFjArbw_g41ITRqI-48LU-5_l",
    heroesBanner: "https://lh3.googleusercontent.com/aida-public/AB6AXuABuMbDooEokXl61wxk9igpurVnSIG7acUEUHU_PR29ldbUU7nb3uwHj0f9-vwsHxauOF5WkabkyfbymkfOKI3R0FaDCNcHZzEVcv_MySqgInFgQEQ9yoJ_bU53eS7nzT5SRvYwTmQMZeBWLayeC-BKs_yoh8dIqbBkszXUQDuErZCBiwKNZi6xlo8g5yEwKaa4_m62pZcdzUWfA1HlNlISUsm5g6YkN6loeg6aDINFA8Q_buTa7LryW4o_7qa3ObXTJpqHQt5Dwurv",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA9gE5X7FoyWlJkjXmkggnx86oKNf0pNT82p7VcBL67DXFew6xu6UFQOGCkRDcGd6qaVHFaTIMW5SlviaT-XFq0zRik4uxnY9bn3NhUAomeafoqCQErsddnmqsRaRtme8SwDBYYMdvXgjE0p7jKxflgdSnbzjPV9pmNyk7Mbzumg7s6If3lQlr-zOsjI6_USoJdJ84Es7AzANbkwuFipc9XMxsimJs8SHqZoZ1AetDqTSZTe2ZeagLy4AUkQAKcGmpn8Dayyj02ruv"
};

export const HEROES: Hero[] = [
    { id: '1', name: 'Airi', role: 'Assassin', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAezHj_o6jj6lSABrnC-BxKNqota4XkgTr3Ftg_dkf7_RPOVnHVMzN5nYt5NSZCiNj5nBORs8ITNVE4RLOCBinWj6zPZQiIpwCHhI4nRzQHejeYh9y57JvnSzgqkInXJYwe0U0keGsYtwsiliEkl00N0v68wwIqE329atqc4dgRXP8o1-vovt1eW7egYxMpHlq1pXDb6Eok1Fuw9fLlfm9e9uFmET1hmGYST_yw6euBx6vES8XEYfX_oW-YWn_aX7Qxs0tCUK7XrbFU' },
    { id: '2', name: 'Zuka', role: 'Fighter', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW_5IWx4PahQOcb12aZuFTamJnBmYDnZGP7QI0kKaeKcgpdGwP-d7tt6abcJLvapiEmqhaZLhXIRelYn2JEj7FwzBZhlv5h3yKd_HyVDuC4hZ5D6VeCIDONCKFqbzzJOD3-xHdZ67acNGSVu1VSsD6N1LKIMLJo1hfjSQr-8FKx8qBvV9dJm-IvXFoipOqJVFqNJCS6OMxTGtEQeLJYAxrYbFHi-ieiFPmbdadcowP90A0VESdlEsClJ86KpIM9YiD1B0sbdhfxv_8' },
    { id: '3', name: 'Violet', role: 'Marksman', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnl9D--lgL_mHgAwp0-dxjL_D_xqDGa32gyjdHJpTnc0SdlJ2Fg2v3KuZsY1ENGN9nLo_wGbDdiE0jhvMcIvRasPEMmqc5R9UXB5iYK88tkUUt2wg6BkvPnDEMuHWJoo4cYHVYhGOrZKBpR-tbYSMD21GIHDCt9iVXkiKmSFs42Bjr4SVaIDfha88oIAHaktB4LK6WQZ9Mx5KQea_oFGg1M4gMCOsCZcsPHMUBvhRXJxBtqoOmQPZwbIaYCRgWjDqDOLhg5DyZ9q6k' },
    { id: '4', name: "Tel'Annas", role: 'Marksman', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxhqbczg-E4zaxIcA5Qzgzsc_W2eOJFd45mwVjWRebvD42QEGSrtL7WPxm79JlG6b7pBoVqubk0wIu5Ci_FlP1bcr7_jcmLfVlBB71H1zxKc6EOz7xarb15cdDJqp405w5cHFJl5t8l0ZtLCh65fAFbA2sHAX-4HpQIvjxFEZL0fo4K1-vm4vhOs8PXsY2vBpHfiWIN6JKrdlFKeZnDEfsKo6fassBAI-QQv-3l6ycCl2SRI5JPNEhuSz6ui4ob8f2UvY1mvzI3Orm' },
    { id: '5', name: 'Krixi', role: 'Mage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPuV-wih23yud83Ju4RB3CiCJXiPMNu_wGnzVW0sAmAAQdfI2hsLbM5vXOUAOuJDLXXTXpw17H76-RnKC8U2RF2N4yiJeCWXSOucFZOzK1VjKIx7AKQqjyRO5E2fllgTk5BIEK3eegLuRQjb7P5nbUzKfFtvVbcybgLhn2OAvx-Xd5Ndjb-1-oIeicCXDqGBrb2HtUA6OvBXpwRyW_fEwAsVRvsDrir2nu8TRyw1w1DJWm97aq1OoW0qRV6POz7ytjl15E4IWZJlnj' },
    { id: '6', name: 'Veera', role: 'Mage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt5Z4oLEbIs-upj7YtNx16yPDzhv3azY7r_SdeNrXYIu5cHfbFmqRIoXp_cxXHACqDUglTsQD_M8Nf2Rw-6ijQAdTgkhdbBvo3Rahe9M-ZLkxVFMIZ7LNWQfokjsPxk-MjDhEjno_-SLJHmeZdvuo4hRG2Sso8svAQy5c3WmZ7aKTfJX71GzkMZQqL7_Fz1gcAsvkX5lJwmubLunA5WdW2cStatxzG9Vvmb5YO6JfOTU4V6JdcdxtLfxKuQHi42zg449yyk1igkJcA' },
    { id: '7', name: 'Thane', role: 'Tank', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIv823uimwV0x56ru_GiBrEuSeQ5UiCu_AQgM9Hh94UlrNXcgXzUuQA6Gc1YYK7u9myxzrgX-wXU67q8An4vw0mHiddUl2lYvZgRF3FO4_8gArLMFaqK13Jn8KGPqk-SPj5-iuww_0E7oAEabh8KHX1qQ4rCt5ZQqKfm6OeRvtUpnkfEMsQQRUea7kXqkG5o3SSAI4flno8jhHzDhyrHbFF5L7q4d5M83I4Kl09wuHPx28ROy35zC1cC4Qd5di5Q615oOf5tyyup2_' },
    { id: '8', name: 'Grakk', role: 'Tank', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu6pH2rIZMs24XvNRKw7_xFKDpN09Fpkjch1mp1fruEraWJ2gODiMxWiNCVhz_5qzEOBszwOc_Nkc65r9DTqQMhXl-yfE5AkJB_-BSByRoYbkvhepHukeCuzykKBchuUoCvMBanKzvg0i-F50rbhq-XfxYzNTht4ZdeIm9xbarxSlFSat3BAQTLheEa9Gz1N7SqesFCflXQWz4tA6M16suy4C2AuY-P13FUBY-0zCWm65yQOYw1-iQidGNANWdCKdOVN92ILvxVklx' },
];

const LOREM_IPSUM = `
<p class="mb-4">The Winter 2025 season has officially begun, bringing with it a tidal wave of changes to the Cosmic Clash arena. Players can expect a completely revamped map, featuring new jungle camps and strategic objectives that will challenge even the most seasoned veterans.</p>
<p class="mb-4">In addition to the environmental shifts, the balance team has been hard at work adjusting hero power levels. Several fan-favorite champions have received significant buffs, while some dominating forces in the meta have been tuned down to ensure a fair playing field for everyone.</p>
<h3 class="text-xl font-bold text-white mb-2 mt-6">Key Highlights</h3>
<ul class="list-disc list-inside mb-4 space-y-2 text-gray-300">
    <li>New Hero: Elara, the Starlight Weaver, joins the roster as a high-mobility mage.</li>
    <li>Map Update: The Abyssal Dragon pit has been redesigned for more dynamic team fights.</li>
    <li>Item Reworks: Support items have been overhauled to provide more utility in the late game.</li>
</ul>
<p class="mb-4">"We wanted to create a season that feels fresh and exciting," said the Lead Game Designer. "With these changes, we hope to see new strategies emerge and players finding creative ways to secure victory."</p>
<p>Get ready to climb the ranks and prove your worth. The battlefield awaits!</p>
`;

export const NEWS: NewsItem[] = [
    {
        id: '1',
        title: 'Summary of the Finals of the Winter Arena of Valor Tournament',
        date: '05.11.2025',
        category: 'Esports',
        author: 'Esports Team',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMM71sJVbgy_ahm8LWjYQHRO_U2zg9__5Cie0M-hMvbSuDgpB7KoEpndf1EblIxyfMdmWY15eZCKIDflrTz8UfLFHiI4_IH0z60my3nWHSeOot2kBEBc2zmTd74K3I2IvH7Hv42AaQOkTI83vCtqf8bm_hV3xcuHlEiT4bQzCw0YUQWq1yIsnwgBnlbWYRz8paY7SD_6d6o0HIzkawCmgP0ME8wzY_JdDXvSDxdXIbQCc8arJ4XsDSKfKjLEsQf0aQ6oN6s8q8Cz0m',
        content: LOREM_IPSUM
    },
    {
        id: '2',
        title: 'Launch of the Arena of Valor Avatar Design Contest',
        date: '24.10.2025',
        category: 'Community',
        author: 'Community Manager',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO76jCZNCvFMbJ5PsSqB4LuZ6oKh2Fr212B6QdDE3bSSqoVe5KY8_-09IPTB4pRtjAE9W4YWo6JESxfN8eUkaKffoNUqoIOfeE_F8688y6j94knV7MaVdOZvISmqNU6QSdPBnY5q8h7CuG_aH0-8qgiRaRkOlnpGPF_ttxt29-P2IuFb1Ukq1sn1G5YjDp_dkYYw1AoocFToRkQa6lesdcrZiQj4Z7_7FrggJMgTN9S9F63FDdwYvvzDxfnFvdyMG58SD-1wdA6ZTx',
        content: LOREM_IPSUM
    },
    {
        id: '3',
        title: 'Realme partners with the Vietnamese Arena of Valor community',
        date: '09.11.2025',
        category: 'Partnership',
        author: 'Marketing Team',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUf91XA3cHEN2ZmUUoTeLCZfumRBtdJHz_9NPvrA0yl6oxGufZ25tz7mdIqwPHD2OxDGw0YMRklvT17Y9a-OYWhkziF7MmAY3hfvdq52Y3XqX7l9UCNicrD4eBC3u1Yb0WL01lcRAOtaHbQX7cxqHmOAD_bnq7aTnsHWT8xT_Rwa1chSmwZuhT7f6jdyCNuOGBy_qQFjSCsL47R-_FWV21au9PB-l-z4z75Vep4z7U5vw40EHnHfp95ZVJny7OS2Xt1hEpl6Kj3Pe',
        content: LOREM_IPSUM
    },
    {
        id: '4',
        title: 'Mid-Season Adjustments for Heroes Quang Minh & Hac Am',
        date: '03.12.2025',
        category: 'Updates',
        author: 'Dev Team',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUBXsW1YDUyLJJ5QDwXiZ3TECep-e2kk3da3Dl92ZWByikzDePnQfuXSamAPe3PqVJTXXKvnFNXbuvPrCphJOTfH9LD2YreOEVhPRRsj6mSMuSjSs4J6Ck1sRBMGgHLWbuJbZhxChHzZCHKbkp7atTteLWtCABlsPS3-kyx351uR__OetYAI85o26jbwZIZ5E0GB1OeULq5EqoswHmkoUMBhyQ9wtbESLGoDe7unT0VxU7D_CsIc-6RFGMJST8KMEiXW-sWV61nUwD',
        content: LOREM_IPSUM
    },
];

export const STATS: HeroStat[] = [
    { id: '1', name: 'Aethel', rank: 'S', winRate: 55.2, pickRate: 12.5, banRate: 45.0, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLWPCF2z9sfwiHmHs4huJaCSf97A0i0osWbyrb59LQsmf7CX55LrrMqUVLCjiKPfYjDzAYxpogOvArXIkWKoTRxj3lOKsTxRTWYXi6SvR9nTlRrujc98ooiKpKfCj-OdlbRG3akvDg75fxM-7jfkcqecbbkWTmTXzGhOVFToohmvGtDUESqDxIXR0ja-Yp4vUFj4BF8_HMDNsTrCelpTmvmBC9gatjnWvdm86D3sHHxDqGT__GqVVrU4J2a4jLTauZoCOcYD22VxTA' },
    { id: '2', name: 'Valerius', rank: 'S', winRate: 54.1, pickRate: 20.1, banRate: 60.2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMSZwoePzpnAIMVqMg5UZjcrbtgUZGgZC4cVMQEDwZYvTwt5RZTqQSLUb8oSRzX0IhJDL7vgFddUCnAYrYRsgeBZkQ0iz4lomrQS7HKtPtdxTJuRfiCSH4RrSyNweCfPU_ZXoIeCGMY0Lvxn1CVwIeOs5yWmEYR3sOogJomG9QDm8yGlN6DP-xj8kocHR9yF_GMHMwjx05LI1cCMDXJXs9MDNeVhsQEQ_6AYEfhSSA_Q8TVfPjPYhl8BIXmRuLuDgw3bz3EL8TrL6U' },
    { id: '3', name: 'Lyra', rank: 'A', winRate: 52.8, pickRate: 8.9, banRate: 15.5, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKMp0NsNsfRudvjRgyAp6tm3rLYow6I6W4XJMWT3fa635tis3eF1w9cJ8GC2FntYJqYUHjvPTIfxqgRRnua-a8DD9Qc3Pgd5W8LqkrZJxa56JShT4FkbZ4KEbniIvVMNsXw80NAT09ZmUrgriA-VuiKRPQm34l4LL7Yoz3k-AQdtZmDaokTzuvrqxBGMWCGNqrHWS5aKvq7E9mJhIiKvN9vpzXc9Q_PfMVmCHjHGhIDCYUnyV2kKdN5Y3Rt134V9eCsMK38erhvblN' },
    { id: '4', name: 'Orion', rank: 'B', winRate: 50.1, pickRate: 15.3, banRate: 5.1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2oQW8Yem3wRzqfL5sFrDT--B3Uv5qSWmYtYfFXrSujNBBCA8IgCoLduP6q_NxkrcZaMAZNtlZC6sKFyVUuRLlOueZKdS2c3xu3wjoOxemvr4tc-BSDSC_HUWfbyAOHAHDG7Z2iROs9oMHQzwvUedjGlrGuEo6XBaXKPm2H30uYbnSQZ2fHu8WIEyAs1fXfAVbuf4j0fY3XMXGTBx-7nHHxpcI5cr2uOEFnn7SUajuNz2igsJVnZyaYBQYXOzprlGi8RZjWW7onrt' },
    { id: '5', name: 'Fenrir', rank: 'C', winRate: 48.9, pickRate: 5.6, banRate: 1.2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy3SUMGOKmRExixDx67HSrQGxfxxkazxGo0Uk_dI0DjyLupDS_fQJMV2GLBTdmW65NqZvxP4amyZIwfcgeAx4mfvaxQnAuFmmQ9-2uwIPG2ydzeajhamTOW9d00LM_OaKNLjzAAKvTwMGpi-a4HGDwcka9O9Tdxt797O5doRj8whuq2cU61BDDaPDwz4m8KRwKF6tYg6ZhFMzoFZkL8CQH8DL__w76x5nK2OWoBoN6ZuJR0FnH8FvtL7YtT66Vj2s-l3xRedvLTH-5' },
    { id: '6', name: 'Sylas', rank: 'A', winRate: 51.5, pickRate: 10.2, banRate: 25.0, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAezHj_o6jj6lSABrnC-BxKNqota4XkgTr3Ftg_dkf7_RPOVnHVMzN5nYt5NSZCiNj5nBORs8ITNVE4RLOCBinWj6zPZQiIpwCHhI4nRzQHejeYh9y57JvnSzgqkInXJYwe0U0keGsYtwsiliEkl00N0v68wwIqE329atqc4dgRXP8o1-vovt1eW7egYxMpHlq1pXDb6Eok1Fuw9fLlfm9e9uFmET1hmGYST_yw6euBx6vES8XEYfX_oW-YWn_aX7Qxs0tCUK7XrbFU' },

];
