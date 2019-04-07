import random

def get_layout():
    teams = ["A", "B", "C", "D"]

    locations = ["Basement", "Kitchen", "Far Bedroom", "Top Floor", "Back Yard"]

    assignments = ["Search", "Rescue", "Fire Attack", "Ventilation"]

    ret_val = ""

    while True:
        if(len(teams) == 0):
            break;

        rand_team_ind = random.randrange(len(teams));
        rand_team = teams[rand_team_ind]
        teams.pop(rand_team_ind)

        rand_location_ind = random.randrange(len(locations))
        rand_location = locations[rand_location_ind]
        locations.pop(rand_location_ind)

        rand_assignment = assignments[random.randrange(len(assignments))]

        add_val= ("Team "+str(rand_team)+" goes to "+str(rand_location)+" for "+str(rand_assignment));

        add_val += '\n'

        ret_val += add_val;

    return ret_val;

def main():
    for i in range(8):
        name = "script_"+str(i)+".txt"
        # f = open(name, mode='w', encoding='utf-8')      # equivalent to 'r' or 'rt'
        with open(name,'w',encoding = 'utf-8') as f:
           f.write(get_layout())

main()
