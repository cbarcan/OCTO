import Match from "../Match";
import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.rounds}, 300px);
  margin-bottom: 5%;
  margin-left: 5%;
`

const RoundWrapper = styled.div`
    //border: solid yellow;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  :last-child {
    .thing {
      display: none;
    }
  }
`

const MatchWrapper = styled.div`
    //border: solid red;
  min-height: 90px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  
  :nth-child(odd) {
    .thing {
      align-items: flex-end;
    } 
    
    .left {
      border-top: 1px white solid;
      border-right: 1px white solid;
    }
    
    .right {
      border-bottom: 1px white solid;
    }
  }
  
  :nth-child(even) {
    .left {
      border-bottom: 1px white solid;
      border-right: 1px white solid;
    }
  }  
`
const Path = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
`

const Left = styled.div`
  height: 50%;
  width: 50%; 
`

const Right = styled.div`
  height: 50%;
  width: 50%;
`

const Round = (props) => {
    return (
        <RoundWrapper>
            {
                props.matches.map((item, index) => {
                   return (
                       <MatchWrapper key={`${item}-${index}`}>
                           {
                               item
                               ?
                               <>
                                   <Match match={item}/>
                                   <Path className={"thing"}>
                                       <Left className={"left"}/>
                                       <Right className={"right"}/>
                                   </Path>
                               </>
                               :
                               <></>
                           }
                       </MatchWrapper>
                   )
                })
            }
        </RoundWrapper>
    )
}

const BracketGeneratorSE = () => {

    const bracket =
        {
            id: "0",
            rounds: [
                {
                    id: "0",
                    matches: [
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "0",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "1",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "2",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "3",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1",
                    matches: [
                        {
                            id: "0",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        },
                        {
                            id: "5",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2",
                    matches: [
                        {
                            id: "6",
                            players: [
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                },
                                {
                                    id: "234",
                                    first_name: "Jon",
                                    last_name: "Name"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    return (
        <Wrapper rounds={bracket.rounds.length}>
            {bracket.rounds.map((item, index) => <Round key={`${item}-${index}`} matches={item.matches}/>)}
        </Wrapper>
    )
}

export default BracketGeneratorSE