const data = [
  {
    type: "gallery" as const,
    title: "Peach Pit. My first concert ever",
    date: "2022-05-28",
    tag: {
      name: "#concerts",
      color: "lime",
    },
    images: [
      "https://lh3.googleusercontent.com/pw/AMWts8DcseMKVHk6OirJRN7V3sGIv5gHjGmOMAe_oD4FKBR4O95rJ8H5ctCtkxuEwS6aaweAekg2QKxtSMZPbm6k7MeMT4G8t8u4OX3Jw3uJKIYRDI1y_5_ne87qiOHcwnBlqKlvnWO3ywsa-Rwe1q_syG2opQ=w1350-h1800-no",
      "https://lh3.googleusercontent.com/qhTBROKTFoXdc9P9JOieSr1Ndf73VI_aMyavffPqGKeJU_CUTtXQIGVbQb-3r6HTjxht2kIlUAyP9uT07p6majwGas09RburWIuIISn2rElTzi8rV0Nnr83EN6Y2ZlMSirwhp01uH-SuK_cqjZn9263vuTkQb40Q8jIRpa7rLZtcfhFOTd7aKnQIQ1c4gFBGLNzperPvFiZJaUhJ2LDuXZAslcovLNk74u759WnBrERjMsxV3VkBzo4L_1jwnv6zOq2nN1a-6F3msm5T-0VcWFG28QndKioorDNWAbJzRaOy5lXWLFVi2-h9IdFGGCBMLP0J0ol-1MThjy33zPC5tnMFu--r0MPV2Xwj05BIJGXnUUkJr4Je3-HL3spoTXzHHpQHk1NbgO5uupMZx1GLm4FI2y4BW5nQkE3PIOxi3G8aU1WMQboM0X91hFJxKu7fVyf2VIEhNR8oS3hRnulkgqYpttNU3w-hUHlGCicGiiOJhDYHZ8LnqiFd8tJjDi-ZW8AEi_Imv3DREN2d9cIPypDtB0sUlaCY9ZJd3ShMF0axrXZZvD9ckQxuwA-O4uOUBvdeiGmB85pVAMQKezINKX-2_HTAFdHXiKNh1RECO3eGQ-Q2q_uLqPd83L14GjxZwoMDnHqwqA8WIEhcaf4KVSQqHNZJyIJrugvl-1fV8jUd2PYuIWzAHU-JZ3fgJk4Tj1X4PAJCGSYq4ZiMfTR4oPmpboO4XhxCH0anpXWm6b76DHc6jwhuFthUUVxo9JTO6avi9Ew7ZIzRKM_p2NzJMuIoghrIIOB5_86PTnckd_YTl0kX5PBas5P4GJjN2MFFfnKtvs1xkcmcSId-k9bM3rA6w-aNMz-VKhFJWZQIt2rU4yy4-YxYTPUPCxiw7G0sFkcW7ORpvKYbhWJLFPe9jbBzFPOgvIsppm6VQb41kOhiE5F5nPvChZNnO8lFL_4rIZuvocB9wx2am02TBjSe=w1350-h1800-no",
      "https://lh3.googleusercontent.com/Xl_fllwiBQCEmJDXwGvWSLC7qqT_E7IS-chyYX66V1pLc38J1gOgsHbKLcyaayrizoMtYOH8dirP3e4pUCKqAz4owVAxKR1MN5VP9X9o3FfBhM-MPTLM79w9IdxL_Q-kvh_0rcvSZoYWQbClHybay2D_ogjJRfKWHwudb1Z4yMzCiuLm26TgzSyaqW06dAnDDgxXvNB3D75-qQuZvMnOvCMqlScmyyDbK6Dynd-mHAHGIhPKkH2ZLz3nn_SektMDoDbaqmfkeMtUNSXWPuJq0C0G2LOWjKbgpTUusEIVVwFDciPzxAl7LbIzXuIqvHMxDg9Ofm_HDFkyyx5icBiSJQlOSrtA_rU3tSCr1PFmiOHUXCnDRbFAOktM0ycQ0J9suDa5VeYhCmMaNTBU-2sxpFjfqlTPWYnindjEiGUvp9xMXfGQGlwXt22b_N00gqD24u8Ykd_a0Y6On1x1H6L3NdqLP78k31FCY74svZIDy2a8Trqa_NYH5dFYICNHBwzSH8ZmzJ3ztx9or_Fp0c4u2HgZ0FAqBuOqj-zKPoCKs0qbPONcMAH6u2M2PO9g27AjFWCU1dAGrkUG37gqQZJa-D5bEi1uz41BDwdbt__waGDcUPTkwMtWlKJd9qRaZ1bXLOUbyatsqCx3L9ydZ0uHRi_DsTLcBdknxPO-lm89W0Itr8BouZekUr5-ZXEKhr4Ofr922596VCqE4Sw--zuF57O0ndOSw0K2LAE4gAdyyM3RLxkN2h4V-STM9rALx59gCTt_DjP0IN3lE1cRGG7EpaXtybxvZzODtAS0YVIhD-JeiT0Mom91IEiilOHgXTrmSuGXGyf5X2GrhZ2T9Sytq54k0BACx0GGlu2iN6MmFd1V-F76RbP4mEUp-sz-sSAUtresuf_824E4D-JE9jPbHNzX6BOv_zs7A2zEVEZ26DHJ_SukP8zZG5nQGaH01siSopNdGrGdreSqHmrmg4UK=w2880-h1620-no",
      "https://lh3.googleusercontent.com/TSoFbv0-fWsTuuCah4UKJVl9OdXE8_nMwW_51p1fha1S4UkrNnyXBRsTaxkZoSwc1trDqWU2nk1tIUCLQSpXzz3kqI03XFHg2HMskcLmoXdnvldwDFRW9fQZcdQwylvaZTz2cGcW_TcRTnWhufOC5TIqrKdnqCqCh2Lxbazg06qgw0sZDQZVjoDFfv3nRYaYzm9m13JNmBs7MMATF2zHrcVwTPF-N6dXYakPx80caZxsW446YMIJvqRsht3aA867DGzYgzXf0H3esLg6Pitc-t6exEY7LBzvX3sGrKCBK1a1azvBHmeT0UUiWR_JLnLGUVXHdXqwYw6h7jXcn9x2w0FGCbj91n1uRnPqgiPKZg0zJkBKMYqIL4t4XKYNtqN0i8fRvhIIcLneUhhyZy9IKDRx5YKQj3vB-DGhw-c-mpuLwfcdC4F3yWntI2B94AnY1yKG8fXBttzmSQ-zk3mxDxBwrYTBPfBh6hI_3zmD3SSfR5bvAiELv9J8v5fAcj4yBB91Zz917hyolTVLwCzA_IKMV_CRY7eHJtIQWNoHwvzqxmWS-7dVEeBPmlBxGl9dP4mZz78KDRNsPJsmM38efl9hWiAmWD0tzrhIOsjzCc6gG2LLUDNzN9GkashetZ7bB3zyQjs-xXnEhyFNoInp6pdD_diWKxdRHJs18ffM0B3BgROoCZGfKLH9C5tvmhynatgnBHn37WS8it-aJTfYs48aZG58oJJAvEgUWjFznGmZBJEd42JhNQlV9W6ukIAf7Tx1RHmodyFTeF1zmEGGKGG3fbexOzRld2NCWuZkMqdZ0mp5KDdSlARHLdS9dggcwdpwLpYMUoFXXR6dG4XULruUgyjtnZT9_KqydZTPaqYMJ7-2V49rOhaNCUR_b6jsrY6ITqZx2IJBsIxkZjgB5oTEkwTNnJ5zLCcTKJ7zywdXIBRlL9aQG6sbBJoLh_GdM_a75XtWuyb6UwlgxD16=w2400-h1800-no",
    ],
  },
  {
    type: "note" as const,
    title: "Treat users as investors",
    date: "2022-06-28",
    tag: {
      name: "#thoughts",
      color: "purple",
    },
  },
  {
    type: "story" as const,
    title: "Trip to Barcelona",
    date: "2022-07-08",
    tag: {
      name: "#trips",
      color: "blue",
    },
    stories: [
      {
        content: "Really stressfull flight, bags got delayed and we got in by 1am. Looking back it was fun though",
        image:
          "https://lh3.googleusercontent.com/CYpdn9iUbbU8Zu5Pb53Wi459P7V9x3Tr7Eq4zDNsh0dLJuEhSp5DGQC4xtg0AIW8mjmLLF7mmZIETzWLkiOO3SdIq3Tsu4TDe-Yg5cai7PvkgEDksiGouZZKNznikEdGqwQc_Fo5mfohZejOuL0n21JT9YRs3VVagG2759yZd_gDFHH_-ye3GHWMepdDswgCFp582etLESB8oMyf4K1TTQ5pGqAS4254RChoh2cmzxj9aCIkiXUGyVwL03pbSPONKZ0IFzS4HfzPOKmTBO30eO70QnH-LAfnlQzUglZa4-6jsc3m1spIjfwnBsjFqrLveU0BMAGHCgZTYOcgB9sspEdCM9Hs4oDpWxKNZZPh-8yHxSBrsYXYIDJXZ73jZjhjX6AldUxz_LQgG7fz6X54IcpfJI3R9ZDz3N2bpOnhMzBZV7CkWy0sMfC33e8wAYp985N51UOC1kT-SWlblkB9vSNmXmIosZsVOhF731ImdsPckFhE5g7leT3jprWgRQwtsnBcOx63bt-e44pWS_SY3KfbH4qWw0-m4SvUvWC3WADPE907B9-2WKvMDke7mG4-LLenNEE2J4gGgBa0SzO6Ky_-twuPH8eWVFhrzZHeQ4mtfisscsm4STHWfO2tXq6oTny-hyXkdDMt1y0pz_Ms9v5-DiOVJbZYTW5MC63GDbXF8-1aq0GP9miGqEkW17bmQWzVh-aK8XChxr-7wXddfhILO62ySPJ3DJsseSyUfT8FYRGghQJNawuKeCw-82qHSukje8C5vglfhRFmbXvizNhqCLMpSddk-9MH9HlJDFe1yI4Vszhudti-TqH1Bw4jiwHpvZg596I1Qb0BVhwuOqyEa9vNeAfiukAtWHoZcDBO2zL3-JnjDD7XePrTLJd8TzDNbBtA4oyCyttP8KN_rd9wFhYdCKEY3k0oklV0JVQNaCd7TUbbKHUYvAf9gICrGMtjlOJXDbEvg8vts7tx=w2400-h1800-no",
      },
      {
        title: "Park Guell",
        image:
          "https://lh3.googleusercontent.com/Vh38Jgf9mmzWtLZTWZGWswOzEqixgry_qoZT_tJuzaoUk11FaNogJmphVM73_fson9Wx65FZxOibcuXYaJCM_3pXbsge4SSwF3ha-9uxipGLqPjfJY0myDW13LC8TL74XWrRSTq-8orPf6F1a_UFBGodp7FRuWWTVP3jrLTG3Q-rfCCGins7p6YnvnE0t6jWv8fxjrQvTknMoTejuuoh0bl37CxXjtwBLUCWMCWRpbRqO_VmlWQmGzE8KgCC-gkA0Xj4rGAtAuzGxgp6F7eLfA_VmDzZqBGhDCsupaWNLBtUSJwC7C3uCwMEcjVtokWYa8K2IuIVEIW4Qd_5pAQ84JPfexKA7ess3XmtQZ_7gs-D1XFzUpdZVEiSMGxLwMWN_KjOOS10KAPb_nIYaK_VnP7txU0eLMqOUWZ31EXjIidT7piSN74kdZzkiG9H_yeo0-N_AG79BIpJFnkG-d5xnQ7OiAZgv_g7-WIQFTlr2L5TjttcsQtYrRKGt8stZaeIAkf2wjWZTSKWf14TXtm6qVeVTcTTEsPK-flT2HkXu91SwNd9ZitLna7lrBZSxbcEjc1Mtu0GQThGNKOFt1bln1M-WIC0k-fNnX1dlRXsNLeVNSe1ODprrVGtYwn2JTLDQqkXnjHnROzjUw7esDXUv18kwWU1VI2B7vdQ9TxGLA4OZOPa8rVo6NBJziGzPeBT--m_MXMMo-7nDP7dYKEuTdmLhXV3gTfzKOdNRoqU2QsdVe0NWIwdwz3nfCr17_Cfas0bvNBEG1IpY_72KvxZAVtOSVylI3u7RL4dHsUlZli4n13ChBOz5-G9Yh1-Yz1bz8YD0OqgJiecYtlzmnFMN4-EggHXAi0iZw3fh9v-CMaiO1U6tYp1pK47ue5L3RGoxEQQ1NhNY2KIamVC-iTiEaeJiVFP8v1jXlUfFsPvk3j4VCWUFWR8rNv7grkkNhWYQrh-ywgKA8UupogQrIdn=w2348-h1760-no",
      },
      {
        content: "Nothing beats a cool breeze by the beach on a hot summer day",
        image:
          "https://lh3.googleusercontent.com/Q6RB7X80RQe0KqIb61JWdRJtUKKYmzHYKTnJvcI3PS-q7VqDrr-fZi3LKYeEh_OKHO_9GtS_563HIh1Dv6CyJMaY0PHjGgKLFH5FWoLYKLT_lFlChmdHniPC3ZQJ522rz2Fj4OTg1bvsebJUr-B87km0w-eyx8JXHy0YuRRYpJ_sT8nSj2tBJgSihGxCRPLOS40VfTL2BK3vUQbYa35RjhqBfgul0EPSY-Jx2sTqEH6NlZ26_rIiX01fEHD67YQkrcLQlfNYP4J42VrUUyRp9Hr_bEqNUvST4u8XI_4OX64PRXEfsIUm97Uu6B4TXv348thBfg0_ZQe1sWAc5sCVWcbQuea9ZFg4PRwZmpkshEywnZIFu5oCFTguxBIlpNGzm2Rg8-FMqdSBiqLi-pZeAAaFJn-919U88hxf_748NsxnC-KIQNN9yWhrEM-CIDCcUpCk6ANjY6XANd5geTWTpbGI0V1vintiib_vwFDz-hS_xI6R-xsdeYi1wcB-u-KA6VYHGvbqYpNPFDV-1bPQ9uR2HGOABBT0d3FYsqamBnqq7typ4HH8C4-EqApAbQrCVKsf1g5zmQM71B3eDcjAKoWJA1cz_tjm4wDo2ykBgH6OOjmrZJtJg4yTlHi93aYsD7doXizTEIhv948q34MEM-JnTLuyenKs7W2o_qkqgv3BV0QQRiRNgJrWYXUUnLJ0GhDyQ88HqCTuHvUblA9JbANqaRTg8rKvHtAxt7mo2fcN9zP7R4x5hGA0El6Iz_Gd3BVJYJezVwzRoi4AuYTJZaBbYL7xijgk1AJabvD_gYaVJ0za0FqH_s3X5U5zrYvb0EQyhQA4HkUe__eXUiwUnw0hEXE0aQa-78_0pIUQoEP5SIUC1a6wKJAHRAiEGcWbw7_OlKuKET7WWk0UnqrmMR-dd0icKv7o1K5dRD74X-f60KKlMY1WN-Udo8mhYX0gM1XT-rkjmNjUGhqB7AYE=w1350-h1800-no",
      },
      {
        title: "Bacoa!!!",
        content: "The best burger Sophia ever had",
        image:
          "https://lh3.googleusercontent.com/e_D7cl1C07ahKkZShGsDeu0KLpqsg746GdlCU45yYxd4-ymqWQpEjhNujJG3Evq-ZD5zaQm9qikbrb6MM67VCKuEQVi-DfDXz6_M3D_TjECFVBJAtWRmbNzUOOx9vGkXizd0qa8E568lxFFf70i3SNT3Lg1up-I1HldvvpVhnarw6gLObrjW7jt5f0H2ZPvvvDAoYav3tc4skwoVqoJlLbobnE-Rz5-tKtgnxFl8z75wgJ3L7SYTDk120wUyx7LXwwiEVy4yEtjmXzdn8p02DfkOXXUhSwDM7w7-ouXsa21TgagZjrdvM4Fg_J_j-LBfdvtGKjQzhsFL5KrzekI_zUCEu6NEL8JaGaE7Ee4m0Pyqe3Z8zioqnXlIBaR_0RcdguPBa3iQh7c56LW2U-Y4D2L6hcmbwM0DLgzJnqjsdQ8HilEfyNlN-tNUD-unQmFsX9-TJbXWQtdPbvFZOIMBejUje055Q_mGVu7NK3eevTBMaCnQirnqgLHc-rw2RFp4b-ti3eEg6cMg7db7CieMaN8kb13fep2Ey3tljHw2_31Ux4blErzNe2F0YgSqXgogwCx5_R9u9vApTdemyEW3bE2o_3tYHcB5XDRjGUmVCjHtUTeEdlcAcXYpqzz1N0yLmY1w7wTZg3sd3zRKpgBSPUKCfqLwy2cbP1zff6_z7_M2KFoxQK9--13kkm8I-kx6xxq-IMoF1beGXlJJwlXSUBGZgxIuGu5EWJQe1JNq0Rnqdvju9Uo0doMLhcHnigP4UaDLipfGVu0EPdXkneitDvlsdoEOTdBnYT2yCZ6sGDeOLTZDsJ_laA2GJKpByNWep-VuRzElxkdkgg4q25O0-6LKP3gTeOVbZkfUQzj6huihG3e6Md62RFCR6PT0eX-LzMCKEVNUnC0kUoowB6MSOKdPK1XemETV3ENDENWd46dvlaPuYBX3kvigj3Kko5ied_sNKTERJZls0Id5ylvF=w1350-h1800-no",
      },
    ],
  },
  {
    type: "gallery" as const,
    title: "Some Barcelona JPENGs",
    date: "2022-07-08",
    tag: {
      name: "#trips",
      color: "blue",
    },
    images: [
      "https://lh3.googleusercontent.com/_iaj7-KNJmADj_zjJ7rcMeKxTjqxuRj3ONzJ1VLJh48P-7sZyIlPnw95-eQK4d8M6MVTJweCWae1UBEb50dYG-r_3rgO64rvTytJS_v1suI-vpCOB840mubA8iPbf0Vus7SsHNRlz3ecELenUvvopgOsjjTXhuBGqF6QJzhmMRP99Oq1dLtzXWW1PC43s1WSI8dykgJ4E0JRn45TuyeqnSA-eGQgTjlBiBwZhG7y9WiAIJpbzaGx7FZx5ZcXhordj8-dy7XiwWN8HN8JzT8475V1H8riCCHxgjmKz1oqq3kMg101KGNqHWzLCGLOAO-nBLhw1sLUA2_hY5H5nYLsamlSu4t0txKEPCQWYJ3JC-n5ct8B0xmccFf1oNQnbrtS8X9GG6jzYCHrWpZEJuiJVDSTFg8q-Bzpi7kbkinFsGlJ1gZxZFk4NxLsi-bckX1XcSNOEW9s0ClF9zeuGYR5IvDAh4RrUKh4g0AI8rLXgTeOoi6qQyL9ZPa4_7qK3Bm7PM2I9WSc2iUgmxrOQXoCAi-sZGp7-7j9Xn1fFrFM6s6Toli-g5MbP17yNNGdUV7yG_NklMwN7MMY7CI-Re-21KPijlixK0YT_XcTaSoTHubY6suqNlApBQS3MWzf7NDj1W79lsqsDkoyjRNLqEs1W8skWKMeCGZwViDTHaWcaWboozGuPHhyGSnrmWEhD2EphSMH6epBoQq8jVyC8mG0XyAX1DlZgVj1Q6cA3y3r8OiiPpb2zUPpYrzXRU1b1RJIhvOZcrQNwEnnveIga91tnT9qKJcUs8LQvEv8dQgHHsf-jx3lDrCzK3v9WD-fPvCI_k_BF_zH9OWq9zNTJHEStjUVNmWxu3c5zvWK_1Yx_05Bb2XTeMu-p83Mm2Jnse01TZ6oxqw90cQDS8hPGk81ZTRg1_pAsEAKrcM9fE509SlHcIfnFpj4AqkPX5133zD1Mt29kHAl2hDd5wkcH2mX=w158-h210-no",
      "https://lh3.googleusercontent.com/22-NEf625oP2ma60H_EuKvE8tBccq3mNUZCuzJdZr8VH2CLSNCDIzTlKiT0kbPMzY3W3oGYlt9IjDJnwCih0uYmBw6ESotgYM3qVp8gpvUgq65ZsFT_U-MZ3AG8zAAyyXTYnR3nNveHxvgjKrasOdO1a1VeQ09UvNYlIQg6yW9BXrXBBlGCo7p3WaiaL-WyASImwLbZXknL-E1Alrmbt2kfDTcyhhIU-91Pu2pGn1jUH0NSS2g7MQsvjBxNadWL1O82WZonQxkV911FNZM7kiTFReNwreKs5PaiUcB6upuhYJ4nJwyRkBjrjD-KnSGlDwdcBdcO7ee_hfAiPvIyf9QucrvQbdlBwh-vZZ_f0-WVTLp3r2_7aCu8ollQd6FVziXbiWXjMlDWDSs0_hAzra1kqDSl9vmhwNSIIRYR0-IFHz3g7lbAB5-nL-J9J4JbrsgCehNybXu5OGPWKc14NqeWCxaPVucYrJjzG38Z7UJuZkkS4CG5SkddyV8WbEZBDUASKzPaDvH6hccs1Q4G-PYGu-xZSdbWw0HYhNE-GKcx0pAE4a9Yrxdul1iPwaM-WOQrJP7ThJGqfN2jfOfGE1cFsqX4xXa0o6ovWoM5TWPpgAYEslljZuBi0ztjltPk10bxAvLLwNrx9x-zzaT-ZIneHdvG__uEKSU7U98XnhLsataKKkL2H3yXQylWVEjNLeq1R7KcJ1fyqiCCWMJlJhnCIEUCdcTEwf0fg_Klk2yXpHvYkQG_8zOQzrSsJAkFiJV7OeR6Pku7ZTvXYdwt3rjjja0ji5ITyz0YNU1NLPUyv5Ek9hp1y1cOvtNKHUCIp9CBNaYWb6m9oUG7ntwJR90LNjuUZ9sgAw1bfBZS6f8EvAIfLvKhQ0BC3fJu8O5OO0q7eLJyoywCZcXa0TVdN6uO3fHU3cpDqEpedluM9H-jj6kDD6Zhixvi_I2S5MSPw2GUb3bOAbmVSKke5YNc6=w1350-h1800-no",
      "https://lh3.googleusercontent.com/gwAfqHbDHRq3ZXTxD-9Ryxs01RaOD_-LfbfaNjqPuAwLG45XjuFnfXZfuZ3x_ExNiea9W434k9d_dpBDYskmoQLcL9C1FKJXGLCNp15wnFzhyqnrQNzLdK1O3Mtv9hrvHrGYbEYSwx63GYhIC5G9qdt-AZZKSMDwG59Rn9DlBA5_LKj5Pl8vZveiXgTZ-mMcTM13pPEYZY7BPa4T_mo85ways29AZjxhUn_QxCPuQvOYKjK41nOaz6oMxEvqG-KcMvpA9NeDesxa3kxvZC-ntnViVdNQ6Zf1herse-IXv_y9Ao_qIGVc3mjrMFpvgwKn0W6SM_5l1hUKFDWVIqmPLqNImmjsDHsijkftiOVjYF6wzw7Q6Pno36u4dhnZJz6yakIzIRj7RDJ5hNl9hGX7rSZsPmtvghl1s87mN0yA2JYU-C0_Pw_-WIi6efnOxdZEDswf0LgOOVt5j-QXfZ_fk9hgGGoISbTZRjt0Llc1vIUIwENOYHxV3lq-dvMv_0QSA38Nui9huDP7AgVzq0BzR949Fq4MGHOqODQBScNEjyUwYaZsl-TLoNIlQVASPtMmrNktzFrPO9z2ynpd9Nf9eXKYDU5txdD4OtakBRlOExmf1KgVmVJim4cx0VCxyYp50cFUwSK0oQC8cLqKJ2EZTvnj6GiC6DCYz0gtmta0qln8YNcepyMjSBdyNxgIEq061KXTWhgH5jiB2pgIC0Rm178l-RWAQlnyqNNaX-PmX11AhGZQbl9zu2NrA4xz0GfFtFXlKHvXkR7Qpfs7RtLDBv7RydcpTwt6BIaFz7g507_yBtiSiLcFa8If2qoaPnEThhXr1tt__9b7ppGmTKv8VnpxZODZE2ej9NfyY7gSqa55L_N2x8cmGfo8WWDig0JG_7723tr9NZGOaOOJ45OTow9VME4FFJusARYQ8A4uCtS4aHOQCsxq4dl2BH6vLzPbX5fodFnw5pSeh56_-Ick=w1350-h1800-no",
      "https://lh3.googleusercontent.com/W-YuezEbcsqXgFfOqXwXoSrfZvBTBfjWExP1O2n7gD2MvUCImYpTUZGK6TOW6_bFyPZffoYZPhZRhIMXw22ZdlKe-CPw2NeZ5gFLj14PeKosT7wl5inHzuPLm9d7lpZIUydHpbbSeRY6HXK6pULd89Eh1w0h1Sz9-Oqg1FQC3b0bBdsHPWPoPV8HG_Et2Kf_Q6tPbmhIGVDlFCeS1vIBwS5-Ereo3s3ow5VgjLzkwLFJCmT3j-QWLMVnvlkMXCSLs41kfzq54eqAaQ7IXlUQ0omlPVv4t8X6TmzIgMyZFxBUenFqx-tXA3Xd8iQU9jQSwRIKjWLU-6qy3mi6V8FTm_vtxb2Q1V5QleU_vmLaCybzCLkQGcGK5uVEv5XwN_HhdqGAhMgxC3OIfwpnCRmaucmVnmjxQjuJnVyun50_9ZtSvFXdMv-f0f_Ln5cQ8jmRIf__Qn5UgZkDoJDANnyvwtJsP836_2R8r2YeAjZMZpLAhfdsGnUHDqSo7FOsnAlWzRo9b-2VT_ZGB6RB4H9WM_hYP5PBm-3ph2eNUTm38UD0iihMUIeN1tXQVG4GKt7YZRlDN4qcbTW9uD2qG3Er_QAFmSEVm2Es_nqFFZTMXCZQXXjhAVm047XWskW1eiY4VSphh9F5f2vaQS-MjdBN6mZiVZO_cGR4kod6WLnLxUc51jwwbqCEz0lv73YksBOcKaDwjtK7u0lM9oArGhgiEvs3NUlE3wwAm3U9M97kxOm67-_BAhIrW-I_kF1QYDgq3w_BgA_LxY-VjTtORl9nhV482Aq_NKfRYTeINS_w0eHTPuS2pdYWUEiLpkawyhS3oUhslbKVRP_MNbWgZbRTpvdNBF8oN_WXhoPt8B_EB7Y6iZbWxqTqHFy_Lr0sPAGOylDS1eH62NWYjtXO2QDkR4TSUYRa8nwEr-Pk-0ghIKH8E8mAxaqDpa3iGRykCoWvv9IKn8hmzXN54iO-aE7n=w1350-h1800-no",
    ],
  },
  {
    type: "note" as const,
    title: "Watermelon has to be the name of my cult or band",
    date: "2022-08-21",
    tag: {
      name: "#thoughts",
      color: "purple",
    },
  },
  {
    type: "note" as const,
    title: "There should be a way to run social experiments on dummy societies",
    date: "2022-10-30",
    tag: {
      name: "#thoughts",
      color: "purple",
    },
  },
];

export default data;