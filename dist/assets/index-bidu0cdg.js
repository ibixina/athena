(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const L="duplicate-subsets",q="Duplicate Subset Sums",H="Medium",N="45-90 minutes",z="You are given 10 distinct positive integers, each at most 100. Prove that there exist two **different non-empty subsets** of these integers that have the **same sum**.",U="2026-04-06",F=[{name:"Subsets and Combinations",description:"Understanding how many ways we can form groups from a larger set.",resourceTitle:"Combinatorics: Subsets",resourceUrl:"https://en.wikipedia.org/wiki/Subset",readTime:"3 min"},{name:"The Pigeonhole Principle",description:"If you have more pigeons than holes, at least one hole must contain more than one pigeon.",resourceTitle:"Introduction to Pigeonhole Principle",resourceUrl:"https://artofproblemsolving.com/wiki/index.php/Pigeonhole_Principle",readTime:"5 min"}],G=[{order:1,content:"How many non-empty subsets are there for a set of 10 elements?"},{order:2,content:"What is the smallest possible sum a subset could have? What is the largest possible sum, knowing each integer is at most 100?"},{order:3,content:"Compare the number of possible non-empty subsets to the number of distinct possible sums. Apply the Pigeonhole Principle."}],Y=`### Step 1: Count the Subsets
A set of 10 distinct elements has [$2^{10} = 1024$ subsets](https://en.wikipedia.org/wiki/Power_set) in total. Excluding the empty set, there are **1023 non-empty subsets**.

### Step 2: Determine the Range of Possible Sums
The minimum possible sum is 1, assuming 1 is in the subset.
The maximum possible sum occurs if the set consists of the 10 largest possible integers (91, 92, ..., 100). That sum is $91 + 92 + \\dots + 100 = 955$.

Thus, any subset sum must be an integer between 1 and 955 inclusive.

### Step 3: Apply the Pigeonhole Principle
We have 1023 different non-empty subsets (the 'pigeons'), but only 955 possible sum values (the 'holes'). Since $1023 > 955$, by the [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_Principle), at least two different non-empty subsets must map to the same sum. $\\blacksquare$`,rn={id:L,title:q,difficulty:H,estimatedTime:N,statement:z,publishDate:U,concepts:F,hints:G,solution:Y},ln=Object.freeze(Object.defineProperty({__proto__:null,concepts:F,default:rn,difficulty:H,estimatedTime:N,hints:G,id:L,publishDate:U,solution:Y,statement:z,title:q},Symbol.toStringTag,{value:"Module"})),X="blue-eyed-islanders",Q="The Blue-Eyed Islanders",K="Hard",V="60-120 minutes",J="A group of 100 people live on an island. They all have blue eyes, but nobody knows their own eye color. They are forbidden to communicate about eye color. There are no mirrors. If a person figures out they have blue eyes, they must leave the island on the ferry that night at midnight. One day, a guru visits the island and announces universally: 'I see someone with blue eyes.' Assuming all islanders are perfectly logical, what happens?",Z="2026-04-07",ee=[{name:"Common Knowledge",description:"Information that is known by everyone, and everyone knows that everyone knows it, ad infinitum.",resourceTitle:"Common Knowledge (Logic)",resourceUrl:"https://en.wikipedia.org/wiki/Common_knowledge_(logic)",readTime:"10 min"},{name:"Mathematical Induction",description:"A method of mathematical proof typically used to establish a given statement for all natural numbers.",resourceTitle:"Mathematical Induction",resourceUrl:"https://en.wikipedia.org/wiki/Mathematical_induction",readTime:"8 min"}],te=[{order:1,content:"What happens if there is exactly 1 person with blue eyes on the island?"},{order:2,content:"If there are exactly 2 people with blue eyes, what do they observe on the first day? What do they conclude on the second day when no one leaves?"},{order:3,content:"Generalize the pattern using mathematical induction for 'k' people with blue eyes."}],ne=`### Step 1: Base Case (n = 1)
If there was only 1 blue-eyed person, they would see 99 brown-eyed people. Knowing *someone* has blue eyes due to the guru's statement, they would realize it must be them and leave on Night 1.

### Step 2: Inductive Step (n = 2)
If there were 2 blue-eyed people, each sees exactly 1 blue-eyed person. They both think, 'If that person is the only blue-eyed one, they will leave tonight.' When no one leaves on Night 1, they both deduce *they* must be the second blue-eyed person. Thus, both leave on Night 2.

### Step 3: Generalization
By induction, if there are $k$ blue-eyed people, they will all wait $k-1$ nights. Seeing nobody leave by the $k-1$th night, they will deduce their own eye color and leave simultaneously on the $k$-th night.

### Conclusion
Since all 100 islanders have blue eyes, no one will leave for 99 nights. On the 100th midnight, all 100 islanders will leave the island together.`,cn={id:X,title:Q,difficulty:K,estimatedTime:V,statement:J,publishDate:Z,concepts:ee,hints:te,solution:ne},dn=Object.freeze(Object.defineProperty({__proto__:null,concepts:ee,default:cn,difficulty:K,estimatedTime:V,hints:te,id:X,publishDate:Z,solution:ne,statement:J,title:Q},Symbol.toStringTag,{value:"Module"})),oe="100-prisoners-boxes",se="100 Prisoners and 100 Boxes",ie="Hard",ae="90-120 minutes",re="There are 100 prisoners numbered 1 to 100. The warden places their numbers randomly in 100 boxes in a room, one number per box. Each prisoner enters the room, opens up to 50 boxes, looks inside, and then leaves. They cannot communicate afterward. If *every* prisoner finds their own number, all are freed. If even one fails, all are executed. Is there a strategy that yields a better than $(1/2)^{100}$ survival rate?",le="2026-04-08",ce=[{name:"Permutations and Cyles",description:"Understanding how random arrangements can form disjoint cycles.",resourceTitle:"Permutation Cycles",resourceUrl:"https://en.wikipedia.org/wiki/Permutation#Cycle_notation",readTime:"15 min"}],de=[{order:1,content:"If prisoners just choose 50 boxes randomly, the probability of everyone succeeding is indeed extremely small."},{order:2,content:"View the boxes and their contents as a random permutation of the numbers 1 to 100."},{order:3,content:"What if prisoner $k$ opens box $k$, and then opens the box corresponding to the number found inside?"}],he=`### Step 1: The Strategy
Prisoner $k$ opens box $k$. They look at the number inside, say $n_1$. They then open box $n_1$, read the number $n_2$, and so forth. They continue tracing this path until they either find their own number $k$ or open 50 boxes.

### Step 2: Why it Works
The boxes form a random permutation of 1 to 100. Every permutation decomposes into disjoint cycles. By starting at box $k$, the prisoner is tracing the cycle containing their own number $k$.
They will definitely find their number if and only if the cycle containing $k$ has a length of at most 50.

### Step 3: Probabilistic Analysis
The prisoners all succeed if the entire permutation contains NO cycle of length greater than 50. What is the probability of a random permutation of 100 elements having no cycle longer than 50?
It turns out to be $1 - \\sum_{k=51}^{100} \\frac{1}{k} \\approx 1 - \\ln(2) \\approx 0.3118$.

Thus, this strategy gives them an astonishing ~31% chance of survival!`,hn={id:oe,title:se,difficulty:ie,estimatedTime:ae,statement:re,publishDate:le,concepts:ce,hints:de,solution:he},un=Object.freeze(Object.defineProperty({__proto__:null,concepts:ce,default:hn,difficulty:ie,estimatedTime:ae,hints:de,id:oe,publishDate:le,solution:he,statement:re,title:se},Symbol.toStringTag,{value:"Module"})),ue="poisoned-wine",me="The Poisoned Wine",pe="Medium",fe="30-60 minutes",ge="A king has 1000 bottles of wine. One bottle is poisoned. The poison is deadly even in the smallest drops, and takes exactly 24 hours to kill. The king has 10 rats and wants to identify the poisoned bottle in exactly 24 hours. How can he arrange the tasting?",be="2026-04-09",ye=[{name:"Binary Representation",description:"Representing numbers in base-2 system.",resourceTitle:"Binary Number System",resourceUrl:"https://en.wikipedia.org/wiki/Binary_number",readTime:"5 min"}],$e=[{order:1,content:"We only have 24 hours, so all testing must be done simultaneously in a single round."},{order:2,content:"Each rat has two possible states after 24 hours: dead or alive."},{order:3,content:"Since there are 10 rats, how many different combinations of dead/alive rats can there be? Note that $2^{10} = 1024$."}],ve=`### Step 1: Label the Bottles
Number the bottles from 1 to 1000. Express each bottle's number in binary. Since $2^{10} = 1024 > 1000$, we need at most 10 bits to represent any bottle number.

### Step 2: Assign the Rats
Label the 10 rats with the place values of the bits: Rat 1 represents the 1st bit ($2^0$), Rat 2 represents the 2nd bit ($2^1$), ..., Rat 10 represents the 10th bit ($2^9$).
Rat $i$ drinks a tiny drop from bottle $j$ if and only if the $i$-th bit of the binary representation of $j$ is a 1.

### Step 3: Decode the Results
Wait 24 hours. Observe which rats die. The dead rats correspond to the bits that are a 1 in the binary representation of the poisoned bottle. By converting this binary sequence back to decimal, the king will know exactly which bottle is poisoned.`,mn={id:ue,title:me,difficulty:pe,estimatedTime:fe,statement:ge,publishDate:be,concepts:ye,hints:$e,solution:ve},pn=Object.freeze(Object.defineProperty({__proto__:null,concepts:ye,default:mn,difficulty:pe,estimatedTime:fe,hints:$e,id:ue,publishDate:be,solution:ve,statement:ge,title:me},Symbol.toStringTag,{value:"Module"})),we="25-horses",Te="The 25 Horses",_e="Medium",ke="60-90 minutes",Se="You have 25 horses. You want to find the top 3 fastest horses. You have a racetrack that can race at most 5 horses at a time. The track doesn't record times, only the relative finishing order of the horses in each race. What is the minimum number of races needed to confidently find the top 3 horses?",xe="2026-04-10",De=[{name:"Sorting Networks and Partial Orders",description:"Finding minimal comparators to sort or select elements.",resourceTitle:"Sorting Networks",resourceUrl:"https://en.wikipedia.org/wiki/Sorting_network",readTime:"12 min"}],Ce=[{order:1,content:"Clearly, you must race all horses at least once. Start by dividing them into 5 groups of 5."},{order:2,content:"After racing the 5 groups, take the 5 winners from each group and race them. What does this reveal?"},{order:3,content:"Can you eliminate any horses from consideration based on the results of these first 6 races?"}],Ie=`### Step 1: Initial Group Races
Divide the 25 horses into 5 groups of 5 and race them. This requires **5 races**.

### Step 2: Race of Winners
Take the 5 winners from each group and race them against each other (**1 race**). 
The winner of this race is the overall #1 horse.
Let's name the groups $A$ to $E$ based on how their winners placed in this race ($A_1 > B_1 > C_1 > D_1 > E_1$).

### Step 3: Elimination
Since we only need the top 3 overall, we can brutally eliminate:
- Entire groups $D$ and $E$.
- $C_2, C_3, C_4, C_5$ (At best, $C_1$ could be 3rd overall. Its subordinates are 4th or worse).
- $B_3, B_4, B_5$ (At best, $B_1$ is 2nd, and $B_2$ is 3rd).
- $A_4, A_5$ (Since $A_1, A_2, A_3$ are strictly faster).

### Step 4: The Final Race
Who is left to fight for 2nd and 3rd place? 
The candidates are: $A_2, A_3$ (from the fastest group), $B_1, B_2$ (from the second group), and $C_1$ (from the third group). 
This is exactly 5 horses! Race them (**1 race**). The top 2 finishers in this race are the overall 2nd and 3rd fastest horses.

Total races: 5 + 1 + 1 = **7 races**.`,fn={id:we,title:Te,difficulty:_e,estimatedTime:ke,statement:Se,publishDate:xe,concepts:De,hints:Ce,solution:Ie},gn=Object.freeze(Object.defineProperty({__proto__:null,concepts:De,default:fn,difficulty:_e,estimatedTime:ke,hints:Ce,id:we,publishDate:xe,solution:Ie,statement:Se,title:Te},Symbol.toStringTag,{value:"Module"})),Ae="three-gods",Pe="The Three Gods",Be="Extreme",Oe="120-180 minutes",je="Three gods A, B, and C are called, in no particular order, True, False, and Random. True always speaks truly, False always speaks falsely, but whether Random speaks truly or falsely is a completely random coin flip. You must determine the identities of A, B, and C by asking three yes-no questions; each question must be put to exactly one god. The gods understand English, but will answer all questions in their own language, in which the words for yes and no are 'da' and 'ja', in some order. You do not know which word means which.",Ee="2026-04-11",We=[{name:"Boolean Logic",description:"Algebraic structure capturing logical operations.",resourceTitle:"Boolean Algebra",resourceUrl:"https://en.wikipedia.org/wiki/Boolean_algebra",readTime:"10 min"},{name:"Self-reference",description:"Statements that refer to themselves.",resourceTitle:"Self-reference",resourceUrl:"https://en.wikipedia.org/wiki/Self-reference",readTime:"10 min"}],Re=[{order:1,content:"You need to bypass the language barrier. Can you construct a question so that 'da' always implies the truth of a statement, regardless of what 'da' actually translates to?"},{order:2,content:"Try embedding a hypothetical about the god's own behavior. E.g., 'If I asked you Q, would you say 'ja'?'"},{order:3,content:"Your first overarching goal must be to find a god you are CERTAIN is not Random."}],Me=`### Step 1: The Magic Lemma
Let $Q$ be a yes/no statement. Ask any non-Random god: 'If I asked you $Q$, would you answer "ja"?'
By rigorous truth table analysis (considering if the god is True/False, and if 'ja' means yes/no), the god's answer will universally be 'ja' if $Q$ is true, and 'da' if $Q$ is false. It perfectly decodes the language and the truth-teller/liar property.

### Step 2: Question 1
Ask God B: 'If I asked you "Is God A Random?", would you answer "ja"?'
- If B answers 'ja', then A is Random (if B is True/False), OR B is Random. In either case, C is NOT Random.
- If B answers 'da', then A is not Random (if B is True/False), OR B is Random. In either case, A is NOT Random.
Let's say the answer points to God X being NOT Random.

### Step 3: Question 2
Ask God X (who is definitely True or False): 'If I asked you "Are you True?", would you answer "ja"?'
- If X answers 'ja', X is True.
- If X answers 'da', X is False.

### Step 4: Question 3
Ask God X: 'If I asked you "Is God A Random?", would you answer "ja"?'
- The answer directly evaluates if A is Random (since X is reliable). 
- By elimination, you can then deduce the identity of the third god.`,bn={id:Ae,title:Pe,difficulty:Be,estimatedTime:Oe,statement:je,publishDate:Ee,concepts:We,hints:Re,solution:Me},yn=Object.freeze(Object.defineProperty({__proto__:null,concepts:We,default:bn,difficulty:Be,estimatedTime:Oe,hints:Re,id:Ae,publishDate:Ee,solution:Me,statement:je,title:Pe},Symbol.toStringTag,{value:"Module"})),Le="ants-on-a-stick",qe="Ants on a Stick",He="Medium",Ne="30-60 minutes",ze="100 ants are walking on a meter stick (100 cm). Each ant travels at a constant speed of 1 cm per second. They start at various positions and arbitrary directions. When two ants collide, they instantly reverse direction and continue at the same speed. If an ant reaches either end of the stick, it falls off. What is the maximum possible time before all ants have fallen off the stick, from any starting configuration?",Ue="2026-04-12",Fe=[{name:"Invariants and Symmetry",description:"Properties of a system that remain unchanged under some transformations.",resourceTitle:"Invariant",resourceUrl:"https://en.wikipedia.org/wiki/Invariant_(mathematics)",readTime:"10 min"}],Ge=[{order:1,content:"What actually happens to the global system of ants during a collision?"},{order:2,content:"Since the ants are identical, does it matter which ant is which?"},{order:3,content:"Imagine the ants simply pass through each other instead of bouncing. How does this change the macro-state?"}],Ye=`### Step 1: The Insight
When two ants collide, they bounce and reverse directions. However, because all ants travel at exactly the same speed and are otherwise identical, the collision is functionally identical to them simply **passing through each other**.
If we ignore the identities of the ants, the set of positions of the ants over time is exactly the same whether they bounce or pass through.

### Step 2: Pass-Through Analysis
If we assume they pass through each other, each 'virtual' ant just walks continuously at 1 cm/s in its original direction until it falls off the end.

### Step 3: Finding the Maximum Time
The maximum time an ant can stay on the stick without changing direction is determined by the length of the stick. If an ant starts at one edge (e.g., 0 cm) and walks towards the other edge (100 cm), it will take exactly 100 seconds to fall off.
Since 'bouncing' is macroscopically identical to 'passing through', the maximum possible time before the stick is empty is **100 seconds**.`,$n={id:Le,title:qe,difficulty:He,estimatedTime:Ne,statement:ze,publishDate:Ue,concepts:Fe,hints:Ge,solution:Ye},vn=Object.freeze(Object.defineProperty({__proto__:null,concepts:Fe,default:$n,difficulty:He,estimatedTime:Ne,hints:Ge,id:Le,publishDate:Ue,solution:Ye,statement:ze,title:qe},Symbol.toStringTag,{value:"Module"})),Xe="12-coin-problem",Qe="12 Coins and a Balance",Ke="Hard",Ve="60-120 minutes",Je="You have 12 seemingly identical coins. 11 of them have exactly the same weight, but one is fake and is either strictly lighter or strictly heavier than the others. You have a balance scale. What is the minimum number of weighings needed to guarantee finding the fake coin and determining whether it is heavier or lighter?",Ze="2026-04-13",et=[{name:"Information Theory",description:"Quantifying the amount of information in outcomes.",resourceTitle:"Information Theory",resourceUrl:"https://en.wikipedia.org/wiki/Information_theory",readTime:"15 min"},{name:"Decision Trees",description:"Hierarchical models of decision pathways.",resourceTitle:"Decision Tree",resourceUrl:"https://en.wikipedia.org/wiki/Decision_tree",readTime:"8 min"}],tt=[{order:1,content:"Each weighing has 3 possible outcomes: Left heavy, Right heavy, or Balanced."},{order:2,content:"There are 24 possible scenarios (12 coins * 2 states: heavy/light). With 3 weighings, you have $3^3 = 27$ branches, so 3 is theoretically possible."},{order:3,content:"Start by dividing the 12 coins into 3 groups of 4."}],nt=`### Overview
It can be done in exactly **3 weighings**. Divide coins into A, B, and C (4 coins each).

### Step 1: Weigh A against B
**Case 1: They balance.** The fake is in C. A and B are all real.
- **Weigh 2**: Weigh 3 coins from C against 3 known real coins.
  - If they balance, the 4th coin in C is fake. **Weigh 3** against a real coin to check if it's heavy/light.
  - If they tilt, you know if the fake is heavy or light, and it's isolated to 3 coins. **Weigh 3**: Weigh 1 suspect vs 1 suspect.

**Case 2: They do not balance.** Assume A is heavier (symmetric logic for B heavier). The fake is either heavy in A, or light in B. C is all real.
- **Weigh 2**: Weigh (3 from A + 1 from B) vs (1 from A + 3 from C). Let's call them $A_1,A_2,A_3,B_1$ vs $A_4,C_1,C_2,C_3$.
  - If they balance, the fake is in the remaining 3 of B ($B_2, B_3, B_4$), and must be light. **Weigh 3**: Weigh $B_2$ vs $B_3$.
  - If the left is heavy, the heavy fake must be in $A_1, A_2, A_3$. **Weigh 3**: Weigh $A_1$ vs $A_2$.
  - If the right is heavy, either $B_1$ is light, or $A_4$ is heavy. **Weigh 3**: Weigh $A_4$ against a real coin.

In all branches, 3 weighings are sufficient.`,wn={id:Xe,title:Qe,difficulty:Ke,estimatedTime:Ve,statement:Je,publishDate:Ze,concepts:et,hints:tt,solution:nt},Tn=Object.freeze(Object.defineProperty({__proto__:null,concepts:et,default:wn,difficulty:Ke,estimatedTime:Ve,hints:tt,id:Xe,publishDate:Ze,solution:nt,statement:Je,title:Qe},Symbol.toStringTag,{value:"Module"})),ot="two-egg-problem",st="The Two Egg Problem",it="Medium",at="45-90 minutes",rt="You have a 100-story building and 2 identical eggs. You want to find the highest floor from which an egg can be dropped without breaking. An egg that survives a fall can be used again. A broken egg is discarded. What is the minimum number of drops you need in the worst case to guarantee finding the critical floor?",lt="2026-04-14",ct=[{name:"Dynamic Programming",description:"Solving complex problems by breaking them into overlapping subproblems.",resourceTitle:"Dynamic Programming",resourceUrl:"https://en.wikipedia.org/wiki/Dynamic_programming",readTime:"12 min"}],dt=[{order:1,content:"If you only had 1 egg, you'd have to start at floor 1 and go up one by one, taking up to 100 drops."},{order:2,content:"With 2 eggs, you can drop the first egg at intervals (e.g., 10, 20, 30). But if it breaks at 10, taking 1 drop, you use up to 9 drops for the rest (total 10). If it breaks at 100, you took 10 drops and need up to 9 more (total 19). Can you balance these worst-case scenarios?"},{order:3,content:"To minimize the maximum drops, the step size should decrease by 1 for each successful drop."}],ht=`### Step 1: The Goal
We want to minimize the maximum possible number of drops. Let the first egg drop from floor $n$.
If it breaks, we must use the second egg to test floors $1$ through $n-1$ linearly. The total drops used will be $1 + (n-1) = n$.

### Step 2: Balancing the Worst Case
If the first egg survives, we have used an attempt, so our remaining "budget" of drops to stay within the $n$ worst-case limit is now $n-1$.
Therefore, the next floor we jump to should be $n + (n-1)$.
If it survives again, we jump by $(n-2)$, up to $n + (n-1) + (n-2)$, and so forth.

### Step 3: Solving the Equation
To cover 100 floors, the sum of these jumps must be at least 100.
$n + (n-1) + (n-2) + \\dots + 1 \\ge 100$
$\\frac{n(n+1)}{2} \\ge 100$
$n^2 + n \\ge 200$

If $n = 13$, $\\frac{13 \\times 14}{2} = 91$ (not enough).
If $n = 14$, $\\frac{14 \\times 15}{2} = 105$ (sufficient).

The minimum number of drops required in the worst-case scenario is **14**.`,_n={id:ot,title:st,difficulty:it,estimatedTime:at,statement:rt,publishDate:lt,concepts:ct,hints:dt,solution:ht},kn=Object.freeze(Object.defineProperty({__proto__:null,concepts:ct,default:_n,difficulty:it,estimatedTime:at,hints:dt,id:ot,publishDate:lt,solution:ht,statement:rt,title:st},Symbol.toStringTag,{value:"Module"})),ut="pirate-game",mt="The Pirate Game",pt="Medium",ft="60-90 minutes",gt="5 perfectly rational pirates (A, B, C, D, E, listed from oldest to youngest) have 100 gold coins. The oldest pirate A proposes how to divide the coins. All pirates vote (including A). If 50% or more vote YES, the coins are distributed. If not, A is thrown overboard, and B becomes the oldest. This continues until a proposal is accepted. Furthermore, pirates are bloodthirsty: if a pirate gets the same amount of money whether they vote YES or NO, they will prefer NO just to watch someone die. What proposal should A make to maximize his gold?",bt="2026-04-15",yt=[{name:"Game Theory",description:"Mathematical models of strategic interactions.",resourceTitle:"Game Theory",resourceUrl:"https://en.wikipedia.org/wiki/Game_theory",readTime:"15 min"},{name:"Backward Induction",description:"Reasoning backwards in time to determine optimal actions.",resourceTitle:"Backward Induction",resourceUrl:"https://en.wikipedia.org/wiki/Backward_induction",readTime:"10 min"}],$t=[{order:1,content:"Solve it backwards. What happens if only D and E are left on the ship?"},{order:2,content:"If D and E are left, D needs 1 vote out of 2. Since 1 is 50%, D's own vote is enough. What is D's optimal proposal?"},{order:3,content:"Work your way back up to C, then B, and finally A, assuming everyone knows what happens in the future stages."}],vt=`### Step 1: 2 Pirates (D, E)
D needs 1 vote (50%). He votes for himself and the proposal passes regardless of E. 
Proposal: **[D: 100, E: 0]**. E gets nothing if it comes to this.

### Step 2: 3 Pirates (C, D, E)
C needs 2 votes. He needs one more vote besides his own. To buy E's vote, C must offer E strictly more than E gets if D is in charge (which is 0). So C offers E 1 coin. C doesn't need D's vote.
Proposal: **[C: 99, D: 0, E: 1]**.

### Step 3: 4 Pirates (B, C, D, E)
B needs 2 votes (2/4 is 50%). He needs one more vote. If B fails, C proposes [99, 0, 1]. To buy D's vote, B must offer D more than the 0 D gets from C. So B offers D 1 coin. B takes 99.
Proposal: **[B: 99, C: 0, D: 1, E: 0]**.

### Step 4: 5 Pirates (A, B, C, D, E)
A needs 3 votes. He needs two more votes. If A fails, B proposes [99, 0, 1, 0]. 
To secure votes as cheaply as possible, A targets the pirates who get 0 under B's plan (C and E). A offers them each 1 coin, which is strictly better than the 0 they'd get under B.
Proposal: **[A: 98, B: 0, C: 1, D: 0, E: 1]**.`,Sn={id:ut,title:mt,difficulty:pt,estimatedTime:ft,statement:gt,publishDate:bt,concepts:yt,hints:$t,solution:vt},xn=Object.freeze(Object.defineProperty({__proto__:null,concepts:yt,default:Sn,difficulty:pt,estimatedTime:ft,hints:$t,id:ut,publishDate:bt,solution:vt,statement:gt,title:mt},Symbol.toStringTag,{value:"Module"})),wt="mutilated-chessboard",Tt="The Mutilated Chessboard",_t="Easy",kt="15-30 minutes",St="You have an 8x8 chessboard and 31 dominos. Each domino covers exactly 2 adjacent squares. You cut off the top right corner square and the bottom left corner square of the chessboard. Can you completely cover the remaining 62 squares with your 31 dominos?",xt="2026-04-16",Dt=[{name:"Graph Coloring",description:"Assigning labels to items subject to topological constraints.",resourceTitle:"Graph Coloring",resourceUrl:"https://en.wikipedia.org/wiki/Graph_coloring",readTime:"10 min"}],Ct=[{order:1,content:"Consider the colors of the squares on a standard chessboard."},{order:2,content:"What colors does a single 2x1 domino cover?"},{order:3,content:"What are the colors of the two removed opposite corners?"}],It=`### Step 1: The Domain
A standard 8x8 chessboard consists of 64 squares: 32 white and 32 black.

### Step 2: The Domino Coverage
Every time you place a domino, regardless of orientation, it covers exactly 1 white square and 1 black square. Therefore, 31 dominos will universally cover exactly 31 white squares and 31 black squares.

### Step 3: The Mutilation
The opposite corners of a chessboard are always the **same color** (e.g., both black or both white).
By removing the top right and bottom left corners, you are left with a board that has 30 squares of one color and 32 squares of the other color.

### Conclusion
Since the 31 dominos require an equal number of black and white squares (31 of each), it is **impossible** to cover the mutilated chessboard.`,Dn={id:wt,title:Tt,difficulty:_t,estimatedTime:kt,statement:St,publishDate:xt,concepts:Dt,hints:Ct,solution:It},Cn=Object.freeze(Object.defineProperty({__proto__:null,concepts:Dt,default:Dn,difficulty:_t,estimatedTime:kt,hints:Ct,id:wt,publishDate:xt,solution:It,statement:St,title:Tt},Symbol.toStringTag,{value:"Module"})),At="camel-and-bananas",Pt="The Camel and the Bananas",Bt="Hard",Ot="60-120 minutes",jt="A merchant has 3000 bananas and needs to transport them to a market 1000 miles away. He uses a camel that can carry at most 1000 bananas at a time. The camel eats 1 banana for every mile it walks (regardless of whether it's carrying a load or walking empty-handed). What is the maximum number of bananas the merchant can bring to the market?",Et="2026-04-17",Wt=[{name:"Optimization Problems",description:"Finding the best solution from all feasible solutions.",resourceTitle:"Optimization",resourceUrl:"https://en.wikipedia.org/wiki/Mathematical_optimization",readTime:"10 min"}],Rt=[{order:1,content:"The camel needs to establish intermediate stockpiles along the path."},{order:2,content:"Since the camel holds 1000 bananas, how many trips are required to move 3000 bananas forward from the start? It takes 5 trips (3 forward, 2 back to fetch more)."},{order:3,content:"Once the stockpile inevitably drops to 2000 bananas due to consumption, how many trips are heavily required to move 2000 bananas?"}],Mt=`### Step 1: Moving 3000 Bananas
To iteratively move 3000 bananas forward, the camel needs 3 trips forward and 2 return trips. This consumes 5 bananas per mile.
We should maintain this inefficiency only until the total stockpile drops to 2000, allowing us to drop a trip. 
Losing 1000 bananas at 5 bananas/mile takes $1000 / 5 = 200$ miles. 
At mile 200, we perfectly consolidate exactly 2000 bananas.

### Step 2: Moving 2000 Bananas
To move 2000 bananas, the camel needs 2 trips forward and 1 return trip, consuming 3 bananas per mile.
We maintain this until the total stockpile drops to 1000. 
Losing 1000 bananas at 3 bananas/mile takes $1000 / 3 = 333.33$ miles. Since we deal in whole bananas, we drop one extra. Let's precise it: we travel 333 miles, eating 999 bananas. 
At mile $200 + 333 = 533$, we have 1001 bananas. We leave 1 behind, taking exactly 1000.

### Step 3: Moving 1000 Bananas
For the final 1000, the camel needs only 1 trip forward, consuming 1 banana/mile.
The remaining distance to the market is $1000 - 533 = 467$ miles.
The camel consumes 467 bananas on this final stretch.

Total delivered: $1000 - 467 = \\mathbf{533}$ bananas.`,In={id:At,title:Pt,difficulty:Bt,estimatedTime:Ot,statement:jt,publishDate:Et,concepts:Wt,hints:Rt,solution:Mt},An=Object.freeze(Object.defineProperty({__proto__:null,concepts:Wt,default:In,difficulty:Bt,estimatedTime:Ot,hints:Rt,id:At,publishDate:Et,solution:Mt,statement:jt,title:Pt},Symbol.toStringTag,{value:"Module"})),Lt="100-prisoners-lightbulb",qt="100 Prisoners and a Light Bulb",Ht="Medium",Nt="45-90 minutes",zt="100 prisoners are put into solitary confinement. The warden says: 'Every day sequentially, I will pick one prisoner uniformly at random and take them to a central room containing a single light bulb with a switch. The prisoner can toggle the switch or leave it. If a prisoner definitively states that EVERY prisoner has visited the room, you will be set free. If wrong, you are executed.' The light bulb is initially OFF. They have one meeting beforehand. What strategy guarantees freedom?",Ut="2026-04-18",Ft=[{name:"Distributed Algorithms",description:"Algorithms designed to run concurrently on multiple machines.",resourceTitle:"Distributed Algorithm",resourceUrl:"https://en.wikipedia.org/wiki/Distributed_algorithm",readTime:"10 min"}],Gt=[{order:1,content:"This requires asymmetric roles. Choose one prisoner to be the 'Counter'."},{order:2,content:"How do the other 99 prisoners signal to the Counter that they have visited the room? They share one bit of state."},{order:3,content:"A prisoner can signal by turning the bulb ON. When should they turn it on, and what should the Counter do with it?"}],Yt=`### Step 1: Assign Roles
The prisoners agree beforehand to designate exactly one of them as the 'Counter', and the other 99 as 'Drones'.

### Step 2: Drone Strategy
If a Drone enters the room and the light is OFF, and they have *never* turned the light ON before in a previous visit, they turn the light ON. 
Under any other circumstance (light is ON, or they have already signaled once historically), they do absolutely nothing.

### Step 3: Counter Strategy
If the Counter enters the room and the light is ON, they turn it OFF and add 1 to their mental count.
If the light is OFF, the Counter does nothing.

### Conclusion
Because a Drone only ever turns the light ON exactly once, the light turns ON exactly 99 times. Since only the Counter turns the light OFF and increments their count, their count is pure. Once the Counter's count reaches 99, they know every other prisoner has successfully signaled. They can safely announce that all 100 prisoners have visited the room.`,Pn={id:Lt,title:qt,difficulty:Ht,estimatedTime:Nt,statement:zt,publishDate:Ut,concepts:Ft,hints:Gt,solution:Yt},Bn=Object.freeze(Object.defineProperty({__proto__:null,concepts:Ft,default:Pn,difficulty:Ht,estimatedTime:Nt,hints:Gt,id:Lt,publishDate:Ut,solution:Yt,statement:zt,title:qt},Symbol.toStringTag,{value:"Module"})),On=Object.assign({"../../problems/001-duplicate-subsets.json":ln,"../../problems/002-blue-eyed-islanders.json":dn,"../../problems/003-100-prisoners-boxes.json":un,"../../problems/004-poisoned-wine.json":pn,"../../problems/005-25-horses.json":gn,"../../problems/006-three-gods.json":yn,"../../problems/007-ants-on-a-stick.json":vn,"../../problems/008-12-coin-problem.json":Tn,"../../problems/009-two-egg-problem.json":kn,"../../problems/010-pirate-game.json":xn,"../../problems/011-mutilated-chessboard.json":Cn,"../../problems/012-camel-and-bananas.json":An,"../../problems/013-100-prisoners-lightbulb.json":Bn}),k=Object.values(On).map(e=>e.default).sort((e,t)=>e.publishDate.localeCompare(t.publishDate));function jn(){const e=new Date().toISOString().split("T")[0],t=k.find(n=>n.publishDate===e);if(t)return t;const a=(Math.floor((new Date().getTime()-new Date("2026-04-06").getTime())/(1e3*60*60*24))%k.length+k.length)%k.length;return k[a]}const Xt="athena_progress";function I(){try{const e=localStorage.getItem(Xt);if(e)return JSON.parse(e)}catch(e){console.error("Failed to load progress:",e)}return{solvedProblems:[],scratchpad:{},lastVisit:new Date().toISOString().split("T")[0]}}function Qt(e){try{localStorage.setItem(Xt,JSON.stringify(e))}catch(t){console.error("Failed to save progress:",t)}}function En(e){const t=I();t.solvedProblems.includes(e)||(t.solvedProblems.push(e),Qt(t))}function B(e,t){const s=I();s.scratchpad[e]=t,Qt(s)}function O(e){return I().solvedProblems.includes(e)}function Wn(e){return I().scratchpad[e]||""}let f,C=new Set,w=!1,m=!1,p=[],o=[33,34,33],h=[];function j(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");t=t.replace(/^### (.*$)/gim,"<h4>$1</h4>").replace(/^## (.*$)/gim,"<h3>$1</h3>").replace(/^# (.*$)/gim,"<h2>$1</h2>").replace(/\$(.*?)\$/g,(n,i)=>`<code class="math">${i.replace(/\\dots/g,"&hellip;").replace(/\\blacksquare/g,"&#9632;").replace(/\^\{(.*?)\}/g,"<sup>$1</sup>").replace(/\^(.)/g,"<sup>$1</sup>").replace(/_\{(.*?)\}/g,"<sub>$1</sub>").replace(/_(.)/g,"<sub>$1</sub>")}</code>`).replace(/\[(.*?)\]\((.*?)\)/g,(n,i,r)=>{const g=i.replace(/<[^>]*>?/gm,"");return`<a href="${r}" data-reader-link="true" data-url="${r}" data-title="${g}">${i}</a>`}).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");const a=t.split(`

`).map(n=>/^<(h\d|ul|ol|li|blockquote|pre)>/.test(n.trim())?n:`<p>${n.replace(/\n/g,"<br>")}</p>`).join(`
`);return console.log("Parsed Markdown Result:",a),a}function Rn(){const e=f,t=O(e.id);return`
    <div class="problem-card">
      <div class="problem-header">
        <h2 class="problem-title">${e.title}</h2>
        <div class="problem-meta">
          <span class="difficulty ${e.difficulty.toLowerCase()}">${e.difficulty}</span>
          <span class="time-estimate">${e.estimatedTime}</span>
        </div>
      </div>
      <div class="problem-statement">${j(e.statement)}</div>
      ${Mn(e)}
      ${Ln(e)}
      ${qn(e)}
      ${Hn(e,t)}
    </div>
    ${t?Nn():""}
  `}function Mn(e){return!e.concepts||e.concepts.length===0?"":`
    <div class="concepts-section">
      <div class="section-title">Concepts to Learn</div>
      <div class="concept-grid">
        ${e.concepts.map((t,s)=>`
          <div class="concept-card">
            <div class="concept-name">${t.name}</div>
            <div class="concept-desc">${t.description}</div>
            <button class="concept-link-btn" onclick="window.openReader(${s})">
              ${t.resourceTitle}<span class="read-time">· ${t.readTime}</span>
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ln(e){return!e.hints||e.hints.length===0?"":`
    <div class="hints-section">
      <div class="section-title">Hints</div>
      <div class="hint-accordion">
        ${e.hints.map(t=>`
          <div class="hint-item ${C.has(t.order)?"open":""}" data-hint="${t.order}">
            <div class="hint-header" onclick="window.toggleHint(${t.order})">
              <span class="hint-label">
                <span class="hint-number">${t.order}</span>
                Hint ${t.order}
              </span>
              <span class="hint-arrow">▼</span>
            </div>
            <div class="hint-content">
              <div class="hint-text">${j(t.content)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function qn(e){return`
    <div class="solution-section">
      <button class="solution-toggle" onclick="window.toggleSolution()">
        <span class="icon">🔓</span>
        <span>${w?"Hide Solution":"Reveal Solution"}</span>
      </button>
      <div class="solution-content ${w?"open":""}">
        <div class="solution-text">${j(e.solution)}</div>
      </div>
    </div>
  `}function Hn(e,t){return`
    <div class="actions">
      ${t?"":`<button class="btn btn-primary" onclick="window.markSolved('${e.id}')">
        ✓ Mark as Solved
      </button>`}
    </div>
  `}function Kt(){const e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const s=t.getTime()-e.getTime(),a=Math.floor(s/(1e3*60*60)),n=Math.floor(s%(1e3*60*60)/(1e3*60)),i=Math.floor(s%(1e3*60)/1e3);return`${a.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}let S=null;function Nn(){return`
    <div class="completed-banner">
      <span class="icon">🎉</span>
      <div class="text">
        <strong>Completed!</strong> Great work on today's problem.
      </div>
      <div class="countdown-timer">
        <span class="countdown-label">Next problem in</span>
        <span class="countdown-value" id="countdown">${Kt()}</span>
      </div>
    </div>
  `}function Vt(){S&&clearInterval(S);const e=document.getElementById("countdown");e&&(S=setInterval(()=>{const t=Kt();e.textContent=t,t==="00:00:00"&&(clearInterval(S),S=null,A())},1e3))}function zn(){O(f.id)&&Vt()}function Un(){const e=Wn(f.id);return`
    <div class="notes-card">
      <div class="notes-header">
        <span class="notes-title">Notes</span>
      </div>
      <div 
        class="scratchpad" 
        contenteditable="true"
        data-placeholder="Write your reasoning, work, and notes here..."
        oninput="window.saveScratchpad('${f.id}', this.innerHTML)"
        onpaste="window.handleNotesPaste(event, '${f.id}')"
        style="overflow-y: auto; outline: none; border-radius: 0; border: none; background: transparent; flex: 1; padding: 1rem;"
      >${e}</div>
    </div>
  `}function Fn(){return!m||p.length===0?"":`
    <div style="display: grid; grid-template-rows: ${h.map((t,s)=>s<h.length-1?`${t}fr 8px`:`${t}fr`).join(" ")}; height: 100%; width: 100%;">
      ${p.map((t,s)=>{const a=f.concepts[t];return`
          <div class="reader-pane" style="height: 100%; min-height: 0; display: flex; flex-direction: column;">
            <div class="reader-header-bar">
              <span class="reader-title-bar">${a.resourceTitle}</span>
              <button class="reader-close-btn" onclick="window.closeReader(${t})">✕</button>
            </div>
            <iframe 
              class="reader-iframe" 
              src="${a.resourceUrl}" 
              sandbox="allow-same-origin allow-scripts allow-forms"
              style="height: 100%; flex: 1; border: none; background: #ffffff;"
            ></iframe>
          </div>
          ${s<p.length-1?`
            <div class="v-resizer" data-vindex="${s}" style="cursor: row-resize; background: transparent; position: relative;">
              <div style="position: absolute; left: 20%; right: 20%; top: 50%; transform: translateY(-50%); height: 4px; border-radius: 2px; background: var(--border-glass); transition: background 0.2s;"></div>
            </div>
          `:""}
        `}).join("")}
    </div>
  `}function Gn(){const e=m;return`
    <main class="workspace" style="grid-template-columns: ${e?`${o[0]}% 8px ${o[1]}% 8px ${o[2]}%`:`${o[0]}% 8px ${o[1]}%`}">
      <div class="pane problem-pane" style="width: 100%">
        ${Rn()}
      </div>
      <div class="resizer" data-index="0"></div>
      <div class="pane notes-pane" style="width: 100%">
        ${Un()}
      </div>
      ${e?`
        <div class="resizer" data-index="1"></div>
        <div class="pane reader-container" style="width: 100%; min-height: 0;">
          ${Fn()}
        </div>
      `:""}
    </main>
  `}function Jt(){return f=jn(),`
    <header>
      <div class="logo">ATH<span>ENA</span></div>
      <div class="tagline">Daily Problem</div>
    </header>
    ${Gn()}
  `}window.toggleHint=e=>{const t=document.querySelector(`.hint-item[data-hint="${e}"]`);t&&(C.has(e)?(C.delete(e),t.classList.remove("open")):(C.add(e),t.classList.add("open")))};window.toggleSolution=()=>{w=!w;const e=document.querySelector(".solution-toggle span:last-child"),t=document.querySelector(".solution-content");e&&(e.textContent=w?"Hide Solution":"Reveal Solution"),t&&(w?t.classList.add("open"):t.classList.remove("open"))};window.markSolved=e=>{En(e),A()};window.saveScratchpad=(e,t)=>{B(e,t)};window.handleNotesPaste=(e,t)=>{if(e.clipboardData&&e.clipboardData.files&&e.clipboardData.files.length>0){const s=e.clipboardData.files[0];if(s.type.startsWith("image/")){e.preventDefault();const a=new FileReader;a.onload=n=>{var g;const i=(g=n.target)==null?void 0:g.result;document.execCommand("insertImage",!1,i);const r=e.target;r&&B(t,r.innerHTML)},a.readAsDataURL(s)}}else if(e.clipboardData){const s=e.clipboardData.getData("text/plain");if(s){e.preventDefault(),document.execCommand("insertText",!1,s);const a=e.target;a&&B(t,a.innerHTML)}}};window.openReader=e=>{const t=f.concepts[e];window.openReaderByLink(null,t.resourceUrl,t.resourceTitle)};window.openReaderByLink=(e,t,s)=>{if(e&&e.preventDefault(),p.findIndex(n=>{var i;return((i=f.concepts[n])==null?void 0:i.resourceUrl)===t})===-1){const n=f.concepts.findIndex(r=>r.resourceUrl===t);if(n!==-1)p.push(n);else{const r=s.replace(/<[^>]*>?/gm,""),g={name:r,description:"",resourceTitle:r,resourceUrl:t,readTime:""};f.concepts.push(g),p.push(f.concepts.length-1)}const i=p.length;h=p.map(()=>100/i)}m=p.length>0,o.length===2&&m&&(o=[33,34,33]),A()};document.addEventListener("click",e=>{const s=e.target.closest('a[data-reader-link="true"]');if(s){e.preventDefault();const a=s.dataset.url||"",n=s.dataset.title||"";window.openReaderByLink(null,a,n)}});window.closeReader=e=>{if(p=p.filter(t=>t!==e),m=p.length>0,!m)o=[o[0]+o[2],o[1],0];else{const t=p.length;h=p.map(()=>100/t)}A()};function A(){document.querySelector("#app").innerHTML=Jt(),Yn(),O(f.id)&&Vt()}function Yn(){const e=document.querySelectorAll(".resizer");let t=!1,s=null,a=0,n=[];const i=document.querySelectorAll(".v-resizer");let r=!1,g=null,E=0,y=[];i.forEach(d=>{d.addEventListener("dblclick",()=>{const l=parseInt(d.dataset.vindex||"0");h[l]<5?(h[l]=50,h[l+1]=50):(h[l+1]+=h[l]-5,h[l]=5);const c=d.parentElement;c&&(c.style.gridTemplateRows=h.map((b,v)=>v<h.length-1?`${b}fr 8px`:`${b}fr`).join(" "))}),d.addEventListener("mousedown",l=>{r=!0,g=d,E=l.clientY,y=[...h],document.body.style.cursor="row-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none"),l.stopPropagation()})}),e.forEach(d=>{d.addEventListener("dblclick",()=>{const l=parseInt(d.dataset.index||"0"),c=5;l===0?o[0]<=c?(o[1]=o[1]+o[0]-(50-(m?o[2]/2:0)),o[0]=50-(m?o[2]/2:0)):(o[1]=o[1]+o[0]-c,o[0]=c):l===1&&m&&(o[2]<=c?(o[1]=o[1]+o[2]-33,o[2]=33):(o[1]=o[1]+o[2]-c,o[2]=c));const b=m?`${o[0]}fr 8px ${o[1]}fr 8px ${o[2]}fr`:`${o[0]}fr 8px ${o[1]}fr`,v=document.querySelector(".workspace");v&&(v.style.gridTemplateColumns=b)}),d.addEventListener("mousedown",l=>{t=!0,s=d,a=l.clientX,n=[...o],document.body.style.cursor="col-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none")})}),document.addEventListener("mousemove",d=>{if(r&&g!==null){const u=parseInt(g.dataset.vindex||"0"),T=d.clientY-E,_=g.parentElement,en=(_==null?void 0:_.offsetHeight)||window.innerHeight,tn=T/en*100,P=[...y],R=5;let D=y[u]+tn;const nn=y[u]+y[u+1]-R;D=Math.max(R,Math.min(nn,D));const on=D-y[u];P[u]=D,P[u+1]=y[u+1]-on,h=P;const sn=h.map((M,an)=>an<h.length-1?`${M}fr 8px`:`${M}fr`).join(" ");_&&(_.style.gridTemplateRows=sn);return}if(!t||s===null)return;const l=parseInt(s.dataset.index||"0"),c=d.clientX-a,b=document.querySelector(".workspace"),v=(b==null?void 0:b.offsetWidth)||window.innerWidth,W=c/v*100,$=[...n],x=5;if(l===0){let u=n[0]+W;const T=100-x-(m?n[2]:0);u=Math.max(x,Math.min(T,u)),$[0]=u,$[1]=100-$[0]-(m?n[2]:0)}else if(l===1&&m){let u=n[1]+W;const T=100-n[0]-x;u=Math.max(x,Math.min(T,u)),$[1]=u,$[2]=100-n[0]-$[1]}o=$;const Zt=m?`${o[0]}fr 8px ${o[1]}fr 8px ${o[2]}fr`:`${o[0]}fr 8px ${o[1]}fr`;b&&(b.style.gridTemplateColumns=Zt)}),document.addEventListener("mouseup",()=>{r&&(r=!1,g=null),t&&(t=!1,s=null),document.body.style.cursor="",document.body.style.userSelect="";const d=document.querySelector(".workspace");d&&(d.style.pointerEvents="")})}document.querySelector("#app").innerHTML=Jt();zn();document.addEventListener("copy",e=>{const t=window.getSelection();t&&!t.isCollapsed&&e.clipboardData&&(e.clipboardData.setData("text/plain",t.toString()),e.preventDefault())});
