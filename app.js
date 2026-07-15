const DATA = "H4sIAAAAAAAAE719W1PcSLbuu36F9rsP0ef27HBfZpp9pnt2jHtHxzwmVQmljUqqkVTQNU8lFcZcGwPGGGMMGMzVLowvbcz1v1hIVfXUf2HHWpkppW7YPQ8nwuGwobQkZa5c61vfupTy1Vf/U1G+IYbar1bICFWdimbfVnx30fdm/Kbre57vTfrulu/uwL/dMfyz67srvjv9+/m6ovxAGmq/amuOWqEWZdfCn8PgdDe+0JvwvVnfXc5c/o1Z18tqvzpgWpY5qjbMuqXWqAFyPN898N113237rSd+663vLQTNdd+bKn6YnyrEGAYh6qBpqU6FqjWL2tRw+hS/tey3XvreOUhqTfjeAtwBhM347p7vjvtNT1G+NY1PzRVHHaCqXWn0KaH7wnef+O40PvsMLsYBvy18/i/U+dRcsVXDdNQhs0/pbs747hw8snvke2O+58LDulO4JOOZSyp1y4K7NF/47oPEVd5E3uetul3pUzpjO4kHSYjv/9RcqapDpmYMqY6p1nTSUG2zVKKW6phVXOU+JXz8a7j8wvfe+62W7x36rXNcjxXfm/bdbdywKb6yIPNn2Fq1hGoyUG+oToU4sENroCXuke/u4wPsdt988N0J372UtkS+dog6qmnQvEvDyWnQmXsv8M6yAHihsqprwxTeB7W0alq0T0Ed2PLdvfDlm4Rq4TKoo8Rw4ArHaqgaKAC7p7fQ3d/Bj+/47hXqV+I6djdzhCavfeq7b75Mwrca6POgZmh2Ra021IpZpaOmNXxbCdpXPdCPo857z/fm+OmAi9fx3/P4vuz6spl/7XLyw9+bo+oosdm5GaV0mBrl20qveRw+PRTLO44Pxy6cjq7S+EWDpKrpDdiSh0H7t3B5znePgnut8PVy8mjBNWWtrGqg6PDxXMl/oY5apeqQqY5qTgXu0KdcnzQ7HxZ89xAPx7TvruJrz/nuhu8uwfujjhHNUYlq05JplPtULsimsNHupu/dZ3sdXN7j69Z0uztFwr439bJqGrIYvo/5kuKdLRT573U7fr5PzYc6k+yQYaoSVTfN4c88KFOWy1hBDUrLoGS2Uy830jodTE8G5x9wcdkx38O/51HCqu8tpoSA8cGLx8Uq33gZM/ZmbLPYBfN4Kl/Dv/kxlK4ZMh2H5N9o1vda7FM2WF0LlmSAOBXLNKu3FTS322B9QSO9zAn/7pdS3aZqld5SR+FiNHdgvCUR8Okr6YncpFBuRfKFavFDWdR2vkxi9jHvWBRdi0VJucEWTzXrzm0luH+KCzHve9Ph6aPAW0EJu7Au/IAnLSJx1GHNKKvmoFoC/SmbKBhsHDtZ3iJuwTEa5le+OxO8uEBpu2k5TqNGQU61bmulQkFX+GLLvtvurb8NQVaxRNu0HJRojmjULhDZ2Wv3Np/5bjt8vNF5eFYojxrc9MMJbJh1EDHmu9vX50/yPIWhlk3K9t6gvziqYxHNUEtmld5Wwpeb8PyrZ92zKVxfkBOuvcgRoqVFFFydtXCxnwLrX6Gq7RBHM43Y4K2wI9LbvScs2nzyCdBQmgVS8LKTyDKL61/ngRkQZFc4PkJhAmHhk3hjzL5IkGMmTwwDBLZpWQ1ERQMUoIFOHNqn9Nx7+Do7vvsQUQeqS2z0wA8xQDRsgKcBSISfeAoKDy5sOmso8H6AVuw6M2kT8HwFH2aWyDBVrUxJnxLc27vhw45aJcPUBrtbIbVaoy8GEp1dF/DhxxM034fCPc/hby8lIINQlxJLJQNm3VE15xZ4a0r1lEhvoes+w4XdC15Oorw5yS4yed9TYiHQgoNT8Gxc0Jjv7ghBMlz4KXsp4hxKrLSI+QIR/eqopuu45IOmNaSNUOZ4YU2YKWNA2lvo7h3j1alVLZEI9TpWnfL7Ml04QvwrG8Toyr+bdbA7DC3rlMJLd55u4MO1OTQAdyigtRr7HYYipVjDWwDw6M0l3VDSdXGFzggiqqOVhilA0paLVrPFEL4kMs8VyvKEH/2sPHc8uLrX3XHxtGWdhAggwGY6Fc0YVm2T4V13PGyuCWcg3x/OuTnooPHD60Y0CKfk095GTZ5kK9vbOAtOd3B911iohSZgNmuGqsRoqI5Wjc34kBnL5RdfXywFq8/yRPSjOploxQZQzzWH4boqlXQznHEFlJ3DAKINJ/HqsTh6iA9jywBQCWQNmtYosXDR79aNMmn8mxIuvwhXn0Jk4s6gl1pGFw2K/vu5Cw+E6lazSMnRSnBarDK1JNQEUPPhenj/JJi/6Hx417laEAjqRmQjlCkSnAJjSVHFqIpb688BunXfPUNfkrTXyWfhAQQcEtUxy6TRp1yfTeHa8APDowhQi9UbH+znSiOy46iXVvbwpSIaEBoB/Egh4MDzdxQyEFGRukUwxgaFamOY/RFOTGufhe0J6aAhe4kX9ybwMX8gjQGGsMQ9iD6MtlCr9inBxbnv7nX3j4ufU7Y28KjincWSls1kIMgCXnGcc03ct+zYoPermKOI+mRPzM7QSYFLnu6sv5CivKSdiAUj6GWAkp93kJnBBl8sjTjsbW8r1xdL4j1nvkzS94R5D5WOUEulBMxSSld6W+u++xHVeBG3Mt8QauVYDqA/5iMBVPKFE9iRR103i+tX6zaz0Dr4N1gxoDEeRnTT9cUc2tRd8UqR2ZEigYG6w1ebQ8SaaQPYHdRKNC8k6LXeX19eBcfNgiDjroBnBf4M1rjgtMc2FrAH0hujxClVwDQStk7wgtEKvWVEQ/h6OZgYlyzGfxqOpsNLCaTNmTTxNAznXuIV/Mk4i+ZNxuCIP01G2DCltZtESbZ/TPydA2N10xjKPh64AB5TzCQc3KPFL3hWHi5IWMCiTt0yEo/bvXqIcPZmBIBxD/eQzGmbg+ntZEdccuFpwC+ipLRZvF1gFhPsTKGwfyc1AuHL8ovw6cuCa/pVi1hUb+Axq4BDDC7OgxdvEQcfIQfJ9PAQw66xtNsaNY0ytVRtUNUY1SiBQMDW4dOXwQVDg20R8e8lVkIwbjaXhVhhEN+ihCekQvUaooZwcvr6fC1JfW3gnrAtmhaiZesUHWURouFGUV2PwzL0CTxsmBbwM29VS6Y5nNzbaFGF+Q4frXQejAs6NCWqny+RaaqDBDhVdRTdFLNIwiMc9eCtVnz3V5D3ap8dDylcTIRLEAGhnaxSB7ydOkAHET2g02NE3qXvbuD2bRWYylQAJsylXaME8ZZmqLX6gK6V+pTr09NgEmJ1dKcrQtpheG9LhIPyzt7RdVw62Y/auIZ90RqyPUz5mchI3bFxsYgNJsUwR2+pFTTBFdOgtsMjlTZ4JW+6t/IAXqnp4ssfha+2OqvvJFlfA5ts0cG6zk4p/tfuUzCwPwTeEg7rNguXMjQe95RVoF+0QbUfXJxqm1Wac+SD1/O+uyzcXVHOod8GWGwOkwYT+LlUSI4IloAxa+hrqTqqGWVz9LbSOVgEd/tomr9Lwf3V/wJQDHQ333HSUIdMswwI1NCMIdgk5DxYTsHd6+41xdGbFvrE9i9a5L+bdSTCB6jjUEu16kaf0n3/+iaHxlFcTBngGuvUKIP24aI31BrsuNhvYGP2j9FVnogT7AXbu9cnE8H2oaw+pZJplXlGo6JVb6kygynOHj8skGpCiNl0RQAsh0lZojPKpKzFlpW9SZUYZIgtKofjDD8eoO/YQ2FreWBctll/Mi2mYBYltmmo8QKh5x+luh6TKhu+O319sdg9uMJsEzInhUecMRgREakakNq5PmOfXQK9i4lJvvUCPI8JGL6IeblE+kPKHpWIrqNBAroI+QgPr9pla803sDBvxFxC9Jg6JSOwTzc8FSiX/FTRKv4APCkQSiyMFRhcHWiohgYqdf1xLVzxBDw5DK7uIXHBt76z1hQIJWUQvuZiZWT/pVJRobbypP6HTolNv0DiFzzhTxYyQkDOJEVxihk1uUhskcwKYX5stALp21LFtGlk0TfQi07GgB8CnLdJrU4JKNOSVhaZCExbqZRYekOErpFQEcMehcv7vjsXnLxG3eEOSJBTBbeRlPMP3kIm7TAc1spxPMz4ZXYEkVA+kAxjyv1nLgbqTtWcJBIBKRyy3iAL0Qy8B8iJhIqnSUpLypGI3ZpODIMfV7CFQB1aasWs2zTGge2g/ZvQ10V25jIgSzYACIJBqDkojEES38iiciEbl8Y3z7ScShTe9CkQzXjT15ebQXM7He/FhEWGQ5OQXsynjWeWVdIZ4qj9kmccRgspcO2MhDqmkt6QqaOc/2b4rJ9HspqdZY1F2LfDEOg6HpnDYu44JRSIaM1hPJutDpDSsFqlVdPSqC3zwEnpDISjQWXeAt2GO5G803cj1GI8oHSvftWuajotlt15Od/bfIiHMvXk/bGyVikxWFAO2vb4scBec0l3kOFWErYd+Gu7gj4dQQvFZ5UT/CsexoRMU2SE2YbnYzIEiY2hhk7qQ0zXOi/nMS54IoD0mBRMSkEQNcpqvYaMJ3UcpvKwFX1K5/0DYADQGXcm9yVyc0fYq2QcxOkrRCg2YTlz2zSNBFXJjBNCsQl4IRAf6V/KH5NBi2BVAH/HPiVsTwdX74Xez4hkY5L1Iw6L6VRIgdlR+cdt9hDLrAiktwpxRG9llt87ZtSW0wxMVRuqcDZtwDKHqRGV6/QVlOtsTYnzyoRt8WOG989sQpRPYEUepIzRrEqMIauRuMMRt2veQthcEJgL4tse83B5iEklNVM3h7R/UgbT2WtQaqhWvSyUbTnYPu5sn6MrYc/K8OFUd/8QT8WytNF3MaWGwgDmMDFpAXB1bmotutphSde6Af6TCUEM12YwPXz0EbKrXyqW1a9YBOw1xjb9DtE1YqiDplmGt2ziys9CQti78lsHvvecx7sJZi9JSjMrDLJ1HZKZrDIlzUsfMS+DR2xC8jJp/xI9HwYuXyIuJ+ZAHA8SfzQFgQH+glhUtbXScJ/SWb6HRSzIWnheZ2wTg/pcmvdnPLAR6YJwHQwRPyrjLBIU951J+hseUmK9EV5ZMgcHKV77FhL4rQX4m+ecs5f/XTx1vVYzedA+iglK1a5jvAGs0bnfGoMwY62ZxEsHeW4X6Q7CsTKEg3a9VIG0Fli0f4sysp6U5uN8grBH7OC/YlkXtEFRZpJn8lUyRDQ8+Je+uy7y+QX5SYsOWdQBmGna3LTaks8EgAnPscGfw1sILmdC76EUF1xmhFXICIhC6GoUSdxNWp4vl+4w7JAExv/S4zJvIGUiip/Y/Q2P3+wf9JkcNxaLfZ2IeYs9TVT4xphyyd/EBXDcM0gmwsVK0RwPFD0jcoBcJirTQN3mCfKEuLYsMbhayWjSV1/9L16JxCLxRJ2AtDYRPoEALPvJvOXErSGI6UCt+qVkCsJ8SlDZj3DhZiVgc8BJZVjcfVyJiB44EB5+TLwhP2ZI4QPaQgs1k/Qr/VFxUP4jfLn4JGiLEw35L/evPCl3DLjOQtyn5oqFoS+iKOIkJYePPgYP5sG6M8moh3nC43IcsGBIzan9cSnsAOEaxTnrsjY4SC0s9YWsl7sTQ6ukxwi9A8Sn0tbxfYuL9xBHjPNDDg/DGDpis+JisPJoS28nSv66bw+CpbmIycoj61iFlcgalU2sUeLVSUcS8FoXyZB0gTPVdagTIYaJHnSUNATlB2oeTLxIAAdvIVxaYYY5W3DJLBwieKRziaOOUvFwo6wcU9ccR6eYvwH0ihHTTFJRsGiZlYoLR4m1j9vClm2IxMt4JrD6qULVYdpQa6ZmONFTOFoVNKdKgHu0+5Te/VnM0B6ICmlWzraOIPM1oqPd69PpG+/U76hlWqNG2VZNA1O56O0hGUCYiejuTCPWYgyifHT+ZJlVJC+pZddoydFG6C2W5bE1p46VXfDstgNVOHWjpGPtDosuuzuPOt5HbitAySAV1Jn6LXzrRrR+0qrIPiQypbBQo6zSnsdv8VYNRIR4fFP2Kvym4b1fe/dnRSQ3LfmYuAQpOlf0F1Jy9IYInkE9nNhUw9qGY3PB/Nt8H8UL1kFFa3g2ZU3N009BHu7FOsn3XRV52hpxNGqUaF9EqO+mNCK4mu02H2TCJqxBIw1WuIIvqFVrpm1rAzrN2A6tVNfBdpzMBnNH3dYF0yZ81K2YMgU3Ml/gnsFp9Va3ciq8NJvHTgjzVTJgO1Bpwp5hgOjEKOGbwuNZDi54OHXRPd7sPBkDrgWKvxYxrJ/Oj56YC249EBUXH6VDkS4T49kCp1TBcsCYND4Kdx8Hrx6IfPxlzmIi/0odjvo2kn4mUoC7wjyiy5FMM69mweD++mwqWH3mu0doraeZxc13Mui4SkSvClhCqirRqQWH9sGF725K3GmUm4UVCd/uhWNz+bAsKpmTeipS73GnqvbHVBhk/Kr1UuW20m220Kay9J5UeBIRULDhpAEnE1e72hC4ok9OOrK0SzscW+/uPCkOi39oqJrh1DW0M0yPBjj32ad0Vt+FY+tQLwV8Aj5RkZLwMJhtZck0BrUy7Amn5xPZPGBKuvcPrq82i3KMPK87QNVRy4T36j1axD2UDkvhU/zFHNIgtdDgZpSVP9rUAM6y82A8OJ5gZyx4MJEX33xdl9cUzrgd+2SV6jYnxz1PrO0R9+ipE52pDGV4Rmz1LaZrrFY2setosqTq2SwNxAWi7gL/48AywRtr6OhYwR/ciG8kFofN4V4+FsmZWeE01iP1jrdZVmZShYIszgILgzJgOhUwaJvoC9oJ8+AtBHOPMMmSyr8khUoWFDdKs9WSaVm05MS6MhO+imzeH7GXkWnU7OiUlOoW2okRjY5KR4XxIdy38W04lJYhV71HNKNEy7K56rybDS6XCzxs3DBkDtjUwmCAox+pko8DnO7O2+BoPR0IifQnPoGQxjIjvF4Act2M+AuPT7EwY70gw8cpcK5ANhkEFwqll2wfypTcjpKGi9KygNMK2pPBVStZv5AyUf3wjFjpCIWKZlktVYgxBFRz9/4BmvW2qDRqB9uTwcwjnluHfrhZSU0AmFjUruux39apjUDOAOFQ+U6RQw2fPeXIyvOimwASugcPKWiujM8i1bguqtqwqT4IZQQsa8rEdO8fdE8PQWq8KyllFnpGdNtUa4Q1OABMM2Sb7HnBqx2k+drXJ81eS8aP32IWBLAMwgkuikDUrQE0wUo7TyoRBc6p556EU8+YuLjdQHQ7cUGgLNBAZNt9igDODLwehQ8KqADJhWGFFoBT02YeIuXUWakdXnrZ+e0VFmwl3avQVDJiamW1bhi0RG2bWA0VqmFNA15upbs34bsH3c2ZYHoJzekVHuyM9gthyOpphkPAVAAPDAf5iUTnJcP6/y0XDgAVatkOMcq5gXuyyiCO8G9oM0CyFQ7MBOvkAerqllrDJK042dcnTSyrnuptPsbHk1fpG150xEJR4jD263bi0tj28a7ZVH/LNxHJ+GVSEtVRiUakklNn3rOUEJlE27cT+eE08nZ3/8DjQgkRS8zYujkKN2ZLl6JHvXEUOOd7U3Gdbr7wuzoUAcUbEF9ZsAG8RI/yEBHCknQbaTY8yav/EmQC1EN9Zwzpml0RJT/d6ePuwTPf3UVIGpXJZHq3ovjdhlWWPjxR0MnzZeyB6BK5oUiIF0ePqpAijnsV89e4n9VoCY8d17vtSh47Q07wZRILfPO6pq+A2oS85uDPiIga/kSkAOiFOqOQnbmjEqOsfn1bueO7e19D1RDP8bDAoWCXa5ZpmHWQk1vq11k57a1L6ZwcNakB0yLn9bfB92XbPeJ3FwipDJ7UMuvybYPZ497KqcxQ5K3FXfOWLI44WZngrLAIF0vkcuVn6Bl2i1dSYRecZAHr8u5yS7Ugzrj9+Zvl0C1giF9lVueOalp8G/krx323wKF7XyfXgrMICMiTnbUC6iwVdOryK0sVimmg56fdg9niT/O+3qpZRe5QIrByC3v+DNXnQMCJTuXPXpFsbC7oES5oYP4Dt/m+Wv3U3FFgM6BpdBH+o/xMdZ39dAL/7OFPxUQBm1L2S6BL8TeJlsOIduVHoIhQzbQJ8kYJ7pJiO9unRBa2UGJR5x8+cIX3C9Ffajomn7oHL8PHv0L+Ood34Sw3ewSso6Y2433gXVlFtXiao7za4RlcE5H1jN5m1LTKgNVmH7OrE34iUqnUp1L1lfiRYdrgn4ImX0jxHeHfk5mP/9AQawjHlCXfI7KPr+kRnsPLgnhCFKTVKeDM8Ne98ORl3CSZ0CRG+jHN4KcfFyKmdXiZOxHNNJBC5JFr/Mz/jyUxePDlFX/w29irY5Ef0AC3FWEfj3rNJ/j5bK9KP78Mam8l75auIJXyrHHao597uJykR0IFY9AFZBC3ijm0RMrnit2KHy3eqKIH/BECAV0XJJcAtsG9PRGKJFMW7kb85KlnjhATI3d443VcP1HUefAHPv5zpRFHoJm2ZTOJHRL+QRh4bHlBsHB9Oc3sQCLHkZ7yUZjJ+LMJsx6Uzm9PCoq+v26wumrSYFodV5iyEy7GTDB2/AzzQcnWXM5N5X5EapnoPGelrYeJYmLuer9jzDon09ug14lq2b9RAPW3FdFukUQGdUhdDLEijgQ6fMXXwCzzHmr2a+El5Q/9CC2O5oBOoZ9uaQ4HiuQEluyNQHWhniVbjo0VFxarTENO4FCKe3eL/LGIUHjZQDrkSYbrUkLi/1siIhNuyMkxYEcLs1/C8sikSBUmF0h5LRDQ3XExGZS94k+aZTtMOS999wmq5R3+wBHlwDlasXJonbOi7hgNWdEPUSHnmKI7mPGymQG3cCPi+i9YvnQJPE9ZRJrnMdyVVW74JKXVRC5FOOVMXT16oThVjFY1WUKGizwujkgxmx0D77iv4Et2KM8Z5GbAU4YVsa1QLgGimBAokKEGAnRm+JipmE4Of5F7VMHgW3joY73exVc9SCGZKHnZpwQb79D9ZNOUMS0ABRA2GbLAqgXtdT4eAej0GcyHZEs1QGOFnt1KFGmw6yFbE9VjeIspXedGRY2SO8K4HInKzUwtmW32ZbviYwqVocn0R0Fgqoe+KRqH4TPrUEEjAI9lDpABtrSo2BAhzyUUUBZcrGLss4YJCi2SCJln/ptQ4ezJuUstzazb+Zb99/MJJP7HevtPfHf29/NJZl4JL3iEDZ5IbxU3jiWL/BM/tgK1gGmHAASyYTq3c73F3XrkWjexGJCJ/usgMEoWqxxf7Iz9lpckHuS9B2viRKV6vX5oQG0GfCJdoPj7+UT37AJ808u1zsXB7+eTibN4WymAXonDypFJKqz9yTQxOoiNTipH8h2xIwwdE0+d15vB7GMgNuPAJJ9+Iho3zznRG9rWn3ieEP7DfO/1yStpWf7CcgkDWhRkZlA+2AMJVc8Ue7Zv42IXQYdcxjcallmPNG67AwPCIvk8X0klMm1Xsl9SYZUY9xdXRW6hf8m2aguiikdp4HsZd6hVazhpLBqrwFf/UIRxNxCGQuiQiL8NqFSo1nTK4KO3gFXwN0iAdfnU3IHoVEKc0USjRFgSoS7L4uZUFNlh3lxsUrpdHCm8Wcysycn5RKFZMpmeKsFi/foZ/zV9I7kdnUwC2sWCZEgCVOUeXnQAkNblTY158TIfz2E7nGSKMurzeQmzvw4TXJv8Ejupsk6uEUv1zx1k3kq6jjdPRai2KNyJLvkzLwvsPBjv7m5leomSQTRsAfZFMGSTiaU9Fvlen0zhaMLCLAybroSlPyKhFPMdogERso9ctrfAJoEkrQMPzxnTzkj2JC0uDb5Iweu7cKxogh+gthNpQMbEzQRT+5lgMTHd7vNk018NmmDMmvd8dwo/vlkE/5kWENkAfo7I41N50uQcxxQA2TMXxKmjKH0rLhNasZtMYDI9Ex3AGpYAsdzfUcEVYKYH6wi0IFLncVJ7BmdXyVE6Z5EghLpYzAvRvyeQzTSgVUQfBK5oCrOifBKCpMa5TVpEr8L0CtGZlShU300+ewqBRyRwnJUWneAwRazXXM+pMRD9NYOmrrM2qpSJSCTcdKTSRzNZtptSRTlElGZjRTza2y+xrmi+2PQrlHtY+JSp6yILj7PBpBsuJgBY4irhkyxao8QRiY8/kBHEKBN6R1jxpWmVxWgUQRtGSQ7ZB7MBZuVMyYuAp+/x78Pk40vvilgKCRFgHyNGNLrnDVwou5aSUgUvZifAMJmhBh+G+fQ8SUBZiYB9BnflAJvWMs4MGUCH8pK4lDdbxFKB+7JDyy+5Y26jQAIzPJgGvVmOlM/GMbp8vaMlY7VrBQkXsWSsstzABxLkXoIvh7WLXIbvPcfq1vvwD+5z+PJFFrwwKS6HtNKT59d2i90p7tvUsISjQgHO9zZeYSHDK9FHl+rZ/DGuHWUvWdJNUEqY3wCsWI5h7F7NJ5f7TmTRVJuw7Trz3fPgwUySMb6rVTWdWBwZXJ+fY8E0azk6SBBf7MlusfGHLKRquknI7GZwnMRZOVArkkNZhU+bwcQa6zfO0Fc/ZzbgX+CQ/tAYRUFG4MQsRuKmjQNnvHDeQgyNpIFZlFSyqSIAeeynicAWfyfMH5/tcjs526XY4kXZ3hsNXm6OGecRaHJ6mWXfg/lz0aEu9SsKj5VJF+W0qsRTXRL2ImMdUm4xYoGGtZo8XMw96m2tYniRXekf2agXDYDWF9CnX331fxTl0/yGGjbXQLdbZ9dn7e7By87bsxhdS2lcMHtRcWZUrSeQqFwrdiTVAcj8Bx+WlEPMYDEab1gU6gUVBlA8hpafGUQEPZM4D2MKTf22MGN7IsyShA5QXaMjVHoHLGyCudfyc2OtoZTjGmPDObFG9XHWgqnEtutVmkxwOxUxhiMjufNgvPPwmCW1k+mxVDtXHXsAclaBF8JGS4C807RY4HbSBMJadB7NF7fgJwYpRc/PBzOJysvkYCahTLk9gZnAkwpy+fNlndOCEpjuPD+9oShYcMB8zWmyPyLWEtH/ILQkUTE6wdHLznRsPbh0ibxGvEGsYYr0ukWhVA2hx4kXbLwD0XOzwdXTxLyTm0RHddWiDwbaJ0WN9S4r1NyMYjms4RwL2+97T36N52IVMIgOP45xVUesNgPa0BCM3rI5fZwqEY+GR24zkyU1ar7/EI+XjjpCvQUBsVZuLMAWveG4+3hQamKXUItFizizF9dn7aD9BAKDVI13ol2c0d2JUlPGvI3AROZB/m0MUHNatswaDlDAc14x9TInb/eANbvcDDfOfXfm+oQdIu5N2HG9vloLn04mubn/NHTG5opF5bWseAeOs2ysF81YJz76h42c4hz51ptcUAptSv+oUztap9QBsuu2QzSDDEDEGfWnRER4fKxm3M5vT0SPSXyyUugV8gKqZtt1yll11Axx4Nux3HQzVJxSKuxaSpbbJ9qU2NyXFWk60AwLhEUiKb/fWLMd02Il/dHAMX6zGlYFGzxIgozhq3fB3Bve2cJHTuyJEXnz2JR+zubjdT7C5BY+wi8xx7mfDcrCsYIOtar8Xo4FUxzYaSuZhqMZYC57Sx/Cp+vshpEPDN+7/N0gazx3w/Flt7IrMBad3WvE1Imj6ZrTwC4PzShZnE5efyXfCQqnoVp2RhzfuSgpVHCzT/Obamf1BCxY6yycWuq+vY9u/qfo7MD2mSNREQZRByxKhs068Bb85Bz5rUc4bHDb944wnNiBqYNQkcwNID7VWGYbsUqa2VibI2w+v7xm0RFIYqilRkmXPNARjpFrwxeJsLu1DnHK4HnW/Qyy6SaUDPMSCZ2OUP0Wipf3jZRKVKcWVo3LRih8/S48fQQt8AduByy8mDUHAxVf4pe6TCK5tcHpixvbYPBpBommszazW1DJzTwgHO8SH+NLLDHUdhHLNo7DpeXoxt2Dq3AJPc0udkvddL+fYm8VORrYTz6Xb7DugE8essxRaNkQPuwoeD2Os3/a4cSD3tIHePmPD+FIXJ7Hs055mF50a6jaMQ0qQ0LDsUxd51N9mF4BNn7NbCNXI28Bxxfgd+W0WHXSYcKb3uTwWN8XsRxtUCtpRJd7OU5mu/cPMLd0mAWD4lKDOHUrcV3xRazdyhyhQBJijTCz+djcaRGjbFZF4I+Kj101rBOm1fRbG7zdKQYFyfaUaMOIPmRamlOpaiX4VoFy2lc/hxXy3uFMjVO/tRHMPQrOl27YGWwJUisE8usAN8AT8l3RrKig3+a9QWPMHuBQjCO/teZ7J773wW/tslkrkWeUymASQSkwy/G9wCGKrraoA+k4dRc+QIt7RD7NshBWcol1nCErHWvRWZI+qdwHs1bD3QLXy+RjfxDry+Gjw5MtDlAmX9z9wQdlWbTGpvXD5bENF5GAsNaH+P0dE/nWMTpF6BOQLVdHcapd7Cxfvrw+nQnfPr/JHMh6hd90YjqOUFNmWE9v0JyUXoI21uQnuNi4ofdO+0ddK4Pv4lgdJ8txH8ZAxns3mF4Km7uwSc+X47WIIXQCqhjEsgjAC4RBFW0wicTbYurtOZwMmISSGxzKXNKn+efqnX5wgU8PwrUXLPBFR3iHg0Y6Qg1W7QAvb9iDplVl4+41o1y3HVacdKcfp9c2O+895pSDbebs252HW+GLV5CM2Z7sre0Lf5EaIn5HzDyyaE0nJYogxtHwXVl4ineQcMry9cVTJrhz0fbd2XBu9aa+3QTaGyF6HZMQd/qxwajumFXCGnDgNu0I/InBaWATg+klbM7azVFTdvLg27806jRkBdm+hIEt+Pbs8RgeZXue2Y7v61ViCIUDVo+lS/7LHLBxlixWeByJtEn7+mwJmrhA+vGNtRUJucCxqQYdVc0aNEHXDc3BPYzkh48YmzIW7q/zp79c/uzK2o5VL6F35U4d9FMdBGyskwETEY5mwCxhbYg1mYe7070m9OQHU++C1izDxJ31F4jXTyBs3z37/IaaOm5lhb0i6uwAxWZAWzON/1FFiBy/XTu4+BhMvoHXHJsLm2vh8SmGXIc5cRVHpVBT/2eIcCyYrVKzzHIdQD6cbPaqQHuZME7qzp/7kbp91FniNQWdh+twAnC7OxPQDvEFiOnO3X6VVqmFoRVwWA0ebknK1qfcudsPQucusaOOzWpb4QN0E0a/6E7fEoeIBcPpiPQXx6JVmG8NJ4QFWMCPQ5n7FTBta8+CkxPAnfxctHuHWMHheXxAXHqA3XcGtYYa0a4IA6xTA1sGfG/Pb82iN28zg+W3nqIJO8SftwDp5oj9hiErJpd1Q/JxdtAMaWv/REibBVVH3Z25cG+TFXSJ0DEr/q+jBrXsilYruAEgZyzunmyGTyfDvX2OSiAIOMOm35vl361BtrXg4UsElx1M+UNRpP6Fz/0NNRyL6No/GRM0YsMxSP6MU3MQY5fpAPtqotXx65NXaNv2gonxcGkL/z0ThdbdV6+7h4/ybogmkOFIHiTBXHhQVazHlEHl2fNwbhUj3zg6ygeYFgXGFr+kh4+dZtNHwXhYBnUSUHAbMRmLZGfZ18cEE2vh03UcWRfNbFwSw4ITWZdU7CVuoA6YCYSQexcM/c4ZqM0Lw36mMW7AXDkQGuBleDCgVWuk5DAnlCS+0AUFF8e99SscK/Vr8Hquu790fbn5ZVHBp/ktFfzVh2PYzWcP/NZZcNUC1pXx2KwfucwbARqc0oNgDA1LWepMFtSeTB9GQztTXcpS2hOcrPZPcQsxVSQ1d0OMEon0DPngIpEOAFxoGR+hlihWrFL8xh0BK2Eqb/NeanhA4F3iEKSsr+3nkwFEE3qSReVzXiJS8ohPpWR8qrfABl6EH45hMlSMhyXpYiw8Lq9KqybIJZLE67MXGNQfhWPrYesex00pMjWxDD+ao9AtBA2/MKRDoPLC0RwxJI9nFmjVmgWjx6owXdcuaTVdi+p5wcwEWOIVPvwYPMLKvJzJ0RnZRDOkpnHRk8z2PcqIsP1mwxe4r0XZXNm8hd7sal40kJzrBjNEIucOJvj4NHz0Cg87+2bX4qluvNAB62+wATvakzjIlLbigEeVcASvxPcm3PDlRom5Fp+aT1lx6a1PzTWcWo+6JqgyiNGaM1LZKaYqmrPSfN91MZcCOiAEdZb3tS1N+dvWbA2mAAAfy24IZR1pnNe9+sC3tOX6ra1oTkWviZMMonlk20/SKXqo3zGoNQL8FH51iZQbAFrA5iUuUWoAN4WRYHP47U5Twfn79EGJ9JnJ7Od1L2ia6npiUgLiAubKD4NLPl85R/3lLzHhBWmjlAwbwF4zKxRNOmKsbHB+zPoFuJZOrSKOm+3+9lZagR9gyoJFjSEHq7+A79VsJynnA2a4jzpvHvveFP53KZNrdsAXRAcmer/E1zdlz1kclUtGO2us8StsbozPZV6q2oDVqGPiuru5BlvlLYRT83kn8dvIXjBy1KKxPWfgxSE6nnhuR9yjcHIW0HwCt+zGwee2GrgvgtMPfuuse3p4fbHYaW8KR4V7hh4Ushg1CmRAicD3C/Wr9BdqlTQwsKx1qedOB9NLvftzUiDNp4BfXyziSK6Z8GQ1U8cY30NQy/JdiEOjATV9ihjZysiZtHRx16TXwqq6kmlwNWlgyVv3zSEP+fn3Ye3G4R90BXPcgEmsakMdMMsNFGSrFNF0n9LZP+3e+4g5eZxIlULRMDaZSU5+CwHjjoHwv5HuYHiOjdGReRJ5bE4uBKwbtsODBomDhBkpGGBlOUjURs0QCpkZSytUeyYPy2e+9FUqSxMCG9R2qIVCw8d7TGiOLB5Ap7zt32jJxLrVFG5ZfRZcAuLP6PMPBBCkQaSCKkxbEQOeCk4bUzZooGPjQY7Ck1XQWnY+csqiPs2/UIPFNzAtpXXG4mU8HNDBhlkRATHxNJZMKFD9hd1yNGrp7sxdSr0pDGXO8JHueOfu9v3e6vwNaqFVJVqbqGWtSg1wwABfa9Qq0RqzRaIJ5QiieJgG1Q5fbgb3WsWivzENuwQJD7TN0esMwvcUAssMzHQ4Ntd99RhWa+Nj+PQl884i5ryB8+V0hJiWE8dYmlHWRrRynei2zEI0p69PTwtsFTIcDduhVRUMhUOhZgtiK20Evbn3ASO2cQwIoojhDDVt3Pe2IFzwFjoP1333StTPS0k2IUm1K6QGIxlg5q6JU8zzJLlHfD6MtxBcPL++eJqKA+s6vrlmDOp1cE92cpce3ccIL9qlQx5tJB7qP8xRaqmDujmK1CWFZjONGbFwbx895FEw9bHz633cBy/5PSeHIu2XnI3PeAxpPqSUM+V1/oy/OBJ50sPry7UAdj+RiNYxlqJ8yheQFzYWweK3MgATJC2hTEuCSRJEkBixw7/UEwGEXH381Vf/V1FYRl6JM/d9isIeTUk8OlcjJWLB+uDapc77Md+9UqoUYivNrvYpCjC+++sY5cwrkQ71KUpncr978EyJSF74LDLlYXNXkVn0mDdWdMExw0+ft2CooNsOJvY7D/cUSPtZBJgihYWPCrI6/CXCZxv84QYtUqWMZFVYwZNSadSgI9KGOjolwOJhZUAj8L/rk9nO89OgvQ63h7kfFiTj8QE6z087v95XatgPJp41OF7qPZpW7BI1iKWZ8BN0CHA5uIvonaRsPf5OZPkjQdPPfXdMYRXqdVjJXnO8e/ZcseA9bTAUHHcocmATe1wl4Yg52lEi9KN0T6e6p/cVDqLZKrEqHAWHnJXEzzAtqsTpYCWceh9OLSsWLJhDEA4q4cOjcMZVcNY4JDcVlsVU4uQne2nf3cQuwzF8PFPXytEOTW8G27sK/aVG0NjCrU/awes5Bd0biYSsrvWevoHPmayAEVxUz73qvHqkVGgZFSB8d9l5uK5AndNIpFwT+zAX0ptSGhqFyhDQwOvLTWjEeHxfAeMRLQP/xXT3wYVSpvEvIiIwPFkNXs8rZVqzaEnL/JrLJLXEryHp/nALDhfFFXqzEXjvFV2LN53xGN2398OnLxX6jzr7KUzJ2lpSqsQagmJDJZj7tbM6pfCmEBsX9n7v/poyVNfKfD+uTyfCk5cKfNtbCYMUHqWwiE+BSmiN9T4oncNp3928vpjtXLQVkRzE8FDBr5oc662O+56rkFKpXq1HaxHlCBQ5oQDmp+fuw4/NGlSX/DO5v6jrJaJLii44OCXN3oHOC7JOyfwqWD/trG7DvllENkOd98fBgwkFsMmQFe3oxrtgawpOilUXdo1laJQozRN9Fil5JUnec6+MWhs5cPjx3ma4+FKxNWllwiXopIU3Jbo2ZPBlhvW6nMaf1h3TMKu4tWjtFeYh+EllXkaRPZDS3ZvotJcVQDz16LSmgLAi8LISTPzWecdOGLIVDlqPN7CMdMTU62IHD2bhlcgosSh/HeYiFdl9KizQUuIQDOQHl5sKh53sBAaX4CTRKOg81lRAEa6eKqRMarGJefQmmHqnDBJHG6rT6FrF4vATPnK1EN7bUioEW3ogSQ1PblHNGDStEhXrefA4bM0rDq3Gwq9PZsPTpjJoQaYuUhScoa+w+ftsI7iRw0Gl+KRYMTmmlM36AFq4vf1gz4WNqkBmHg32q63gYhGdEB3SwB+zjdmZCyZ+A+Hx/nfeH4dvzpQheB+Dn8fum5fXZ2ewPDUwy7EfQE5dMQUFD8+L6ESJ0Aws5JNfg+NtpaJRi1ilCl6IqEYpMeyD9vwQoGfrrDP9snv/AJ4U57Dy+yAwVSIoi2YcJgHjAeZzg/njI35WLIa5CwDAfwPkIt2d4YkAAA==";

const ADDITIONAL_DATA = "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";

async function decompressData(encoded) {
  const bytes = Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0));
  if (!("DecompressionStream" in window)) {
    throw new Error("このブラウザは教材データの展開に対応していません");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
}

async function decodeData() {
  const [original, additional] = await Promise.all([
    decompressData(DATA),
    decompressData(ADDITIONAL_DATA),
  ]);
  return `${original.trimEnd()}\n\n${additional}`;
}

function normalizeRawData(raw) {
  return raw
    .replace("Right.\n�す。", "Right.\nそうです。")
    .replace(
      "Okay…\n�す。\n\nIt so…\n\nCan you help me?",
      "Okay…\nわかりました。\n\nIt so…\nそれは…\n\nCan you help me?",
    );
}

const STORAGE_KEY = "english-memorizer-state-v1";
const cardsEl = document.querySelector("#cards");
const tabsEl = document.querySelector("#sectionTabs");
const searchInput = document.querySelector("#searchInput");
const progressText = document.querySelector("#progressText");
const emptyState = document.querySelector("#emptyState");
const resetButton = document.querySelector("#resetButton");

const state = loadState();
let sections = [];
let activeSection = "001";

function parseRaw(raw) {
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const result = [];
  let current = null;
  let pendingHeading = "";

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (/^\d{3}$/.test(line)) {
      current = { id: line, items: [] };
      result.push(current);
      pendingHeading = "";
      continue;
    }

    if (!current) continue;

    if (/^[①-⑩]/.test(line)) {
      pendingHeading = line;
      continue;
    }

    const next = lines[i + 1];
    if (!next || /^\d{3}$/.test(next) || /^[①-⑩]/.test(next)) continue;

    const isVocab = Number(current.id) >= 5;
    const english = isVocab ? next : line;
    const japanese = isVocab ? line : next;
    current.items.push({
      id: `${current.id}-${current.items.length}`,
      section: current.id,
      heading: pendingHeading,
      english,
      japanese,
      vocab: isVocab,
    });
    pendingHeading = "";
    i += 1;
  }

  return result;
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderTabs() {
  tabsEl.innerHTML = "";
  for (const section of sections) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab${section.id === activeSection ? " active" : ""}`;
    button.textContent = section.id;
    button.addEventListener("click", () => {
      activeSection = section.id;
      render();
    });
    tabsEl.append(button);
  }
}

function render() {
  renderTabs();
  const query = searchInput.value.trim().toLowerCase();
  const section = sections.find((entry) => entry.id === activeSection);
  const visible = section.items.filter((item) => {
    const text = `${item.english} ${item.japanese}`.toLowerCase();
    return text.includes(query);
  });

  cardsEl.innerHTML = "";
  let lastHeading = "";

  for (const item of visible) {
    if (item.heading && item.heading !== lastHeading) {
      const heading = document.createElement("h2");
      heading.className = "section-title";
      heading.textContent = item.heading;
      cardsEl.append(heading);
      lastHeading = item.heading;
    }

    cardsEl.append(createCard(item));
  }

  emptyState.hidden = visible.length > 0;
  updateProgress();
}

function createCard(item) {
  const saved = state[item.id] ?? {};
  const article = document.createElement("article");
  article.className = "card";
  article.classList.toggle("square-checked", Boolean(saved.square));
  article.classList.toggle("circle-checked", Boolean(saved.circle));

  const english = document.createElement("p");
  english.className = "english";
  english.textContent = item.english;

  const japanese = document.createElement("p");
  japanese.className = "japanese";
  japanese.textContent = item.japanese;

  if (item.vocab) {
    article.append(japanese, english);
  } else {
    article.append(english, japanese);
  }

  const checks = document.createElement("div");
  checks.className = "checks";
  checks.append(makeCheck(item, "square", "覚えた", saved.square));
  checks.append(makeCheck(item, "circle", "完璧に覚えた", saved.circle));
  article.append(checks);
  applyVisualState(article, saved);

  return article;
}

function makeCheck(item, type, label, checked) {
  const wrapper = document.createElement("label");
  wrapper.className = `check ${type === "circle" ? "round" : "square"}`;
  wrapper.title = label;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(checked);
  input.setAttribute("aria-label", label);
  input.addEventListener("change", () => {
    state[item.id] = { ...(state[item.id] ?? {}), [type]: input.checked };
    saveState();
    const card = wrapper.closest(".card");
    if (card) {
      card.classList.toggle(`${type}-checked`, input.checked);
      applyVisualState(card, state[item.id]);
    }
    updateProgress();
  });

  const mark = document.createElement("span");
  mark.className = "mark";
  wrapper.append(input, mark);
  return wrapper;
}

function applyVisualState(card, saved = {}) {
  const english = card.querySelector(".english");
  const japanese = card.querySelector(".japanese");
  if (!english || !japanese) return;

  english.style.color = "";
  japanese.style.color = "";

  if (saved.circle) {
    english.style.color = "#b7b7b7";
    japanese.style.color = "#b7b7b7";
    return;
  }

  if (saved.square) {
    english.style.color = "#878787";
  }
}

function updateProgress() {
  const total = sections.reduce((sum, section) => sum + section.items.length, 0);
  const square = Object.values(state).filter((entry) => entry.square).length;
  const circle = Object.values(state).filter((entry) => entry.circle).length;
  progressText.textContent = `${total}件 / □ ${square} / ○ ${circle}`;
}

searchInput.addEventListener("input", render);
resetButton.addEventListener("click", () => {
  if (!confirm("すべてのチェックを外しますか？")) return;
  for (const key of Object.keys(state)) delete state[key];
  saveState();
  render();
});

decodeData()
  .then((raw) => {
    sections = parseRaw(normalizeRawData(raw));
    activeSection = sections[0]?.id ?? "001";
    render();
  })
  .catch((error) => {
    console.error(error);
    progressText.textContent = "教材データを読み込めませんでした";
  });
